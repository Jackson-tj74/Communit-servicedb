
import Service from "../model/serviceModel.js";

import Category from "../model/category.js";
import User from "../model/userModel.js";
import { sendEmail } from "../services/sendEmail.js";
import { emailNotificationTemplate } from "../utils/emailNotificationTemplate.js";
class ServiceController {
    
   static createService = async (req, res) => {
    try {
      const { title, description, categorys, price } = req.body;
      const category = await Category.findById(categorys);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      const userId = req.user?._id;
      if (!userId) {
        return res.status(401).json({ message: 'User not authenticated' });
      }

      const service = await Service.findOne({ title });
      if (service) {
        return res.status(403).json({ messgae: 'Service already exist' });
      }

      let newService = await Service.create({
        title,
        description,
        categorys,
        price,
        provider: userId,
      });

      newService = await newService.populate([
        { path: 'categorys', select: 'categoryName' },
        { path: 'provider', select: 'names email' },
      ]);

      const users = await User.find();
      if (!users) {
        return res
          .status(404)
          .json({ status: 404, message: 'users not found' });
      }
      users.map(async (user) => {
        await sendEmail(emailNotificationTemplate(
           user.email,
           req.body.title,
           req.body.description,
        ));
      });

      return res.status(201).json({
        message: 'Service successfully created',
        newService,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

    

    static getAllServices = async (req, res) => {
        const services = await Service.find()
        if (!services) {
            return res.status(404).json({ message: "Services not found" })
        } else {
            return res.status(200).json({ message: "Services founded successfully" ,services})
        }
    }
    static deleteOneService = async (req, res) => {
        try {
            const id = req.params.id
            const service = await Service.findByIdAndDelete(id)
            if (!service) {
                return res.status(404).json({ message: "Service not found" })
            } else {
                return res.status(200).json({ message: "Service deleted successfully" ,service})
            }

        } catch (error) {
            return res.status(500).json({message:"Sevice not deleted"})

        }
    }
    static deleteAllServices = async (req, res) => {
        const services = await Service.deleteMany(req.body)
        if (!services) {
            return res.status(404).json({ message: "Services not found" })

        } else {
            return res.status(200).json({ message: "Services delete successfully",services })
        }

    }
    static UpdateServices =async (req,res)=>{
        const id = req.params.id
        const update = await Service.findByIdAndUpdate(id,req.body,{new:true})
        
        if(!update){
          return  res.status(404).json({message:"Service not found"})

        }else{
            return res.status(200).json({ message: "Service updated successfully" ,update});

        }
        
    }
    static getOneService =async(req,res)=>{
        try{
        const id = req.params.id
        const service = await Category.findById(id)
        if(!service){
          return res.status(404).json({message:"service are not found"})
        }else{
          return res.status(200).json({message:"service founded successfully",service})
        }
      }catch(error){
        return res.status(500).json({message:"service are not deleted"})
      }
    }

}
export default ServiceController