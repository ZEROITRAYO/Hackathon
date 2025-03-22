import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import User from "./models/UserModel.js";


passport.use(new LocalStrategy(async(USERNAME,PASSWORD,done)=>{
    try {
        console.log('Received credentials:',USERNAME,PASSWORD);
        const user=await User.findOne({USERNAME:USERNAME});
        if(!user)
            return done(null,false,{message:'Incorrect USERNAME'});
        const ispasswordmatch=await user.comparePassword(PASSWORD);
        if(ispasswordmatch){
            return done(null,user);
        }
        else{
            return done(null,false,{message:'Incorrect password'});
        }
    } catch (error) {
        return done(error);
    }
}))

export default passport;

