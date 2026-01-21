
import Service from "../model/serviceModel.js";
import User from "../model/userModel.js";
import Category from "../model/category.js";

class ServiceController {
    /*static createService = async (req, res) => {

        const categoryId = req.body.categorys
        const category = await Category.findById({ _id: categoryId })
        if (!category) {
            return res.status(404).json({ message: 'Category not found' })
        } else {
            const userId = req.user._id
            if (!userId) {
                return res.status(404).json({ message: "user not found" })
            } else {
                const service = await Service.create(req.body)
                if (!service) {
                    return res.status(404).json({ message: "service not create" })
                } else {
                    return res.status(201).json({ message: "service successfully create", service })
                }
            }
        }

    }*/
   static createService = async (req, res) => {
    try {
        const { categoryId } = req.body;

        if (!categoryId) {
            return res.status(400).json({ message: "categoryId is required" });
        }

        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        const service = await Service.create({
            ...req.body,
            user: req.user._id,
            category: categoryId
        });

        res.status(201).json({
            message: "Service created successfully",
            service
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
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
          return res.status(200).json({message:"service founded successfully"})
        }
      }catch(error){
        return res.status(500).json({message:"service are not deleted"})
      }
    }

}
export default ServiceController