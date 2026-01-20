import Service from "../model/serviceModel.js";
import User from "../model/userModel.js";
import Category from "../model/category.js";

class ServiceController{
    static createService =async(req,res)=>{

        const categoryId = req.body.categorys
        const category = await User.findById({_id:categoryId})
        if(!category){
            return res.status(404).json({message:'Category not found'})
        }else{
            const userId = req.user._id
            if(!userId){
                return res.status(404).json({message:"user not found"})
            }else{
                const service = await Service.create(req.body)
                if(!service){
                    return res.status(404).json({message:"service not create"})
                }else{
                    return res.status(201).json({message:"service successfully create",service})
                }
            }
    }

    }
}
export default ServiceController