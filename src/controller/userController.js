import User from "../model/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
class Controller {

    static signup = async (req, res) => {

        const { names, email, password, role } = req.body
        const hashPassword = bcrypt.hashSync(req.body.password, 10)
        try {

            const user = await User.create({ names, email, password: hashPassword, role })


            if (!user) {

                return res.status(404).json({ message: "Creation of user failed" })
            } else {
                return res.status(200).json({ message: 'User succefully created', user })
            }
        }

        catch (error) {
            console.log(error)
            return res.status(500).json({ message: "create user failed" })
        }
    }
    static login = async (req, res) => {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "Invalid email" })
        } else {
            const comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return res.status(404).json({ message: "Invalid password" })
            } else {

                const token = jwt.sign({ user: user }, process.env.SCRET_KEY, { expiresIn: "1d" })
                return res.status(200).json({ message: "login succefully", token })

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
            return res.status(200).json({messa:"Users delete succefully"})
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
};
}

export default Controller