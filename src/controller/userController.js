import User from "../model/userModel.js"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/jwtUtils.js"
import { sendEmail } from "../services/sendEmail.js"
import { verifyAccountTemplate } from "../utils/verifyEmailTamplent.js"
import { DecodToken } from "../utils/jwtUtils.js"

class Controller {
         
     static signup=async(req,res)=> {
      const {names,email,password,role,verifyToken} = req.body
       const hashPassword = bcrypt.hashSync(req.body.password,10)
      try {
          const user = await User.create({names,email,password:hashPassword,role})
          const token = generateToken(user?.id)
          user.verifyToken = token
          user.save()

          const verifyLink = `${process.env.CLIENT_URL}/verified-email/${token}`
          await sendEmail(verifyAccountTemplate(email,verifyLink))
      
         return res.status(201).json({message:"User successfuly created",user})
      } catch (error) {
         return res.status(500).json({message:`Create user failed ${error}`})
        
      }
     
}

static verifyEmailAccount = async (req, res) => {
  try {
    const { verifyToken } = req.params;

    const decodedToken = DecodToken(verifyToken);
    if (!decodedToken?.id) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const user = await User.findById(decodedToken.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.isVerified) {
      return res.status(200).json({
        status: 200,
        message: "Email already verified",
      });
    }

    user.isVerified = true;
    await user.save();

    return res.status(200).json({
      status: 200,
      message: "Email verified successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

    
    
    static login = async (req, res) => {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "Invalid email or password" })
        } else {
            const comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return res.status(404).json({ message: "Invalid password or password" })
            } else {

                
                const token = generateToken(user?._id)
                return res.status(200).json({ message: "login succefully" ,token})

            }

        }

    }
    static getAllUsers = async(req,res) => {
        const users = await User.find()
        if(!users){
            return res.status(404).json({message:"user not found"})
        }else{
            return res.status(200).json({message:"Users found succefully",users})
        }

    }
     
    
    static deleteAllUsers = async(req,res)=>{
        
        
        const users = await User.find()

        if(!users){
            return res.status(404).json({message:"Users not found"})
        }else{
            return res.status(200).json({messa:"Users delete succefully",users})
        }

}
 
static deleteOneUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to delete user" });
  }
}
static updateUser =async (req,res)=>{
    try{
    const id = req.params.id
   const user = await User.findByIdAndUpdate(id,req.body,{new:true})
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }else{

    return res.status(200).json({ message: "User updated successfully" ,user});
    }
}catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update user" });
  }
}
}

export default Controller