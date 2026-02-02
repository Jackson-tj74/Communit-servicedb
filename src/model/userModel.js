
import mongoose from "mongoose"
import { verify } from "node:crypto"

const userSchema = new mongoose.Schema({
    names:{
        type:String,
        required:[true,"please provide your name"],
        
    },
    email:{
        type:String,
        requred:[true,"please provide your email"],
        unique:true

    },

    password:{
        type:String,
        required:[true,"please provide your password"],
    },

    role:{
        type:String,
        enum:['client','provider','admin'],
        default:'client'
        
    },
    isVerified:{
       type:Boolean,
       default:false
    },
    verifyToken:{
        type:String
    },
    
        resetPasswordToken:{
            type:String,
        },
    
createAt:{
    type:Date,
    default: new Date(Date.now())
}

})

const User = mongoose.model("User",userSchema)
export default User

