import User from "../model/userModel.js"
import bcrypt from "bcrypt"
class Controller{

    static signup=async(req,res)=>{

        const{names,email,password,role}= req.body
        const hashPassword = bcrypt.hashSync(req.body.password,10)
        try{

             const user = await User.create({names,email,password:hashPassword,role})


        if(!user){

            return res.status(404).json({message:"Creation of user failed"})
        }else{
            return res.status(201).json({message:"User succefully created",user})
        }
    }
    catch (error){
        console.log(error)
        return res.status(500).json({message:"create user failed"})
    }



    }


}


export default Controller