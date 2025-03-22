// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// const userSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//     },
//     mobile:{
//         type:String,
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     investmentHorizon: {
//         type: String,
//         enum: ["short-term", "medium-term", "long-term"],
//         default: "long-term",
//       },
//       riskAppetite: {
//         type: String,
//         enum: ["low", "moderate", "high"],
//         default: "moderate",
//       },
//       goal: {
//         type: String,
//         enum: ["wealth-creation", "passive-income", "tax-saving"],
//         default: "wealth-creation",
//       },
      
//             isMFA:{
//                 type:Boolean,
//                 required:false,
//             },
//             twoFactorSecret:{
//                 type:String
//             },
// },
// {timestamps:true});

// userSchema.pre('save',async function(next){
//     const user=this;
//     if(!user.isModified('password')) return next();
//     try {
//         const salt=await bcrypt.genSalt(10);
//         const hashedpassword=await bcrypt.hash(user.password,salt);
//         user.password=hashedpassword;
//         next();
//     } catch (error) {
//         return next(error);
//     }
// })
// userSchema.methods.comparePassword=async function(candidatePassword){
//     try {
//         const isMatch=await bcrypt.compare(candidatePassword,this.password);
//         return isMatch;
//     } catch (error) {
//         throw error;
//     }
// }

// const User = mongoose.model('User', userSchema);

// export default User;

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true, // Ensure email is required
            unique: true, // Prevent duplicate emails
        },
        mobile: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: true,
        },
        investmentHorizon: {
            type: String,
            enum: ["short-term", "medium-term", "long-term"],
            default: "long-term",
        },
        riskAppetite: {
            type: String,
            enum: ["low", "moderate", "high"],
            default: "moderate",
        },
        goal: {
            type: String,
            enum: ["wealth-creation", "passive-income", "tax-saving"],
            default: "wealth-creation",
        },
        isMFA: {
            type: Boolean,
            default: false, // Default MFA to false
        },
        twoFactorSecret: {
            type: String,
            required: false,
        },
        twoFactorOTP: {
            type: String,
            required: false,
        },
        otpExpiresAt: {
            type: Date,
            required: false,
        },
    },
    { timestamps: true }
);

// 🔐 **Hash Password Before Saving**
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        return next(error);
    }
});

// 🔄 **Compare Password**
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// 🔄 **Clear OTP After Verification**
userSchema.methods.clearOTP = async function () {
    this.twoFactorOTP = null;
    this.otpExpiresAt = null;
    await this.save();
};

const User = mongoose.model("User", userSchema);

export default User;
