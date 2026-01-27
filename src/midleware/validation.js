import Category from "../model/category.js"
import Service from "../model/serviceModel.js"
import User from "../model/userModel.js"

export const EmailExist = async (req, res, next) => {
    const email = req.body
    const user = await User.findOne(email)

    if (user) {
        return res.status(403).json({ message: "User already exist" })

    } else {

        return next()
    }

}
export const CategoryExist = async (req, res, next) => {
    const categoryName = req.body
    const category = await Category.findOne(categoryName)

    if (category) {
        return res.status(403).json({ message: "Category already exist" })
    } else {
        next()
    }

}
export const ServiceExist = async(req,res,next)=>{
const title = req.body
    const service = await Service.findOne(title)
    if(service){
    return res.status(404).json({message:"Service already exist"})
    }else{
        next()
    }
    
}


