
import mongoose from "mongoose"

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
createAt:{
    type:Date,
    default: new Date(Date.now())
}

})

const User = mongoose.model("User",userSchema)
export default User

