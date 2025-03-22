import express from "express";
import User from "./../models/UserModel.js";
import { jwtAuthMiddleware, generateToken } from './../jwt.js';
import speakeasy from "speakeasy";
import { sendEmail } from '../emailservice.js';
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

const router = express.Router();

async function sendOTP(to, otp) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: "Your OTP Code",
        html: `<p>Your One-Time Password (OTP) is: <b>${otp}</b></p>
               <p>This OTP is valid for 10 minutes.</p>`,
    };

    await transporter.sendMail(mailOptions);
}

// Function to generate a 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000); 
}

//Singup Route
router.post('/signup',async(req,res)=>{
    try {
        //Req.body contains user data
        const data=req.body

        //Create new user document 
        const newUser=new User(data);

        //Save new user to database
        const response=await newUser.save();
        console.log('data saved');

        const payload={
            id:response.id,
            
        }
        console.log(JSON.stringify(payload));
        const token=generateToken(payload);
        console.log("Token is ",token);
        res.status(200).json({response:response,token:token});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'});
    }
})

// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ error: "User not found" });
//         }

//         // Verify password (you should use bcrypt.compare() for hashed passwords)
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ error: "Invalid password" });
//         }

//         // Enable MFA
//         user.isMFA = true; 
//         let otp = generateOTP(); // Generate OTP

//         if (!user.twoFactorSecret) {
//             user.twoFactorSecret = speakeasy.generateSecret({ length: 20 }).base32;
//         }

//         // Store OTP and expiry in the database
//         user.twoFactorOTP = otp; 
//         user.otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // Set expiry

//         await user.save(); 

//         // Send OTP via email
//         await sendOTP(user.email, otp);
//         console.log(`Generated OTP: ${otp} (sent to ${user.email})`);

//         return res.json({ message: "OTP sent to your email. Please verify." });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// });

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            console.log(`Login failed: User not found`);
            return res.status(400).json({ error: "User not found" });
        }

        console.log(`User found: ${user.email}`);

        // Verify password using the comparePassword method
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            console.log(`Login failed: Incorrect password`);
            return res.status(400).json({ error: "Invalid password" });
        }

        console.log(`Password matched for ${user.email}`);

        // Enable MFA
        user.isMFA = true;
        let otp = generateOTP(); 

        if (!user.twoFactorSecret) {
            user.twoFactorSecret = speakeasy.generateSecret({ length: 20 }).base32;
        }

        // Store OTP and expiry in the database
        user.twoFactorOTP = otp; 
        user.otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); 

        await user.save();

        // Send OTP via email
        await sendOTP(user.email, otp);
        console.log(`Generated OTP: ${otp} (sent to ${user.email})`);

        return res.json({ message: "OTP sent to your email. Please verify." });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/2fa/verify', async (req, res) => {
    try {
        const { email, token } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "User not found or 2FA is not enabled" });
        }

        // Debugging Logs
        console.log(`Stored OTP: ${user.twoFactorOTP}, Received OTP: ${token}`);
        console.log(`OTP Expiry Time: ${user.otpExpiresAt}, Current Time: ${new Date()}`);

        // Validate OTP expiration
        if (!user.twoFactorOTP || !user.otpExpiresAt || Date.now() > user.otpExpiresAt.getTime()) {
            return res.status(400).json({ error: "OTP expired or invalid" });
        }

        // Convert to number for comparison
        if (parseInt(user.twoFactorOTP) !== parseInt(token)) {
            return res.status(400).json({ error: "Invalid OTP" });
        }

        // OTP verified, generate JWT
        const jwtToken = generateToken({ id: user.id });

        // Clear OTP after successful verification
        user.twoFactorOTP = null;
        user.otpExpiresAt = null;
        await user.save(); // ❗ Ensure changes are committed

        res.status(200).json({ message: "2FA successful", token: jwtToken });
    } catch (error) {
        console.error("Error in 2FA verification:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



//Profile Route
router.get('/profile',jwtAuthMiddleware,async(req,res)=>{
    try {
        const userData=req.user;

        const userId=userData.id;
        const user=await User.findById(userId);

        res.status(200).json({user});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'});
    }
})
//Change password Route
router.put('/profile/password',jwtAuthMiddleware,async(req,res)=>{
    try {
        //Extract id from token
        const userId=req.user.id
        const{currentPassword,newPassword}=req.body
        //Find the user by userid
        const user=await User.findById(userId);
        //If password does not match,return error
        if(!(await user.comparePassword(password))){
            return res.status(401).json({
                error:'Invalid password'
            });
        }
        //Update password
        user.password=newPassword;
        await user.save();
        console.log('Password updated');
        res.status(200).json({message:'Password updated'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'});
    }
})

export default router;