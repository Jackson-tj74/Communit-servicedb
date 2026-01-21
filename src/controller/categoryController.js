import Category from "../model/category.js"

class CategoryController{

    static createCategory = async(req,res)=>{
        const category = await Category.create(req.body)
        if(!category){
            return res.status(404).json({message:"category not crated"})

        }else{
            return res.status(201).json({message:"category  crated successfully",category})

        }

    }
    static getAllCategories =async (req,res)=>{
        
        
        const categories = await Category.find()

        if(!categories){
            return res.status(404).json({message:"category not be got"})

        }else{
            return res.status(201).json({message:"category  got successfully",categories})

        }

        }
       
        static deleteOneCategory = async (req, res) => {
  
          try {
    
            const { id } = req.params.id
          const category = await Category.findByIdAndDelete(id,req.body,{new:true})

        if (!category) {
        return res.status(404).json({ message: "category not found" })
       }

       return res.status(200).json({ message: "category deleted successfully" })
      } catch (error) {
      console.error(error);
       return res.status(500).json({ message: "category not deleted" })
       }
        }

         static deleteAllCategories=async(req,res)=>{
         const categories= await Category.deleteMany(req.body )
          if(!categories){
          return res.status(404).json({message:"Categories not found"})
        }else{
          return res.status(200).json({message:"Categories deleted successfully"})
        }
        }

        static updateCategory =async (req,res)=>{
          try{
          const id = req.params.id
          const updatecategory = await Category.findByIdAndUpdate(id)
          if(!updatecategory){
             return res.status(404).json({message:"Categories not found"})

          }else{
             return res.status(200).json({message:"Categories updated successfully",updatecategory})
          }
        }catch (error) {
        console.error(error);
       return res.status(500).json({ message: "Failed to update user"});
  

        }
  }

  static getOneCategory =async(req,res)=>{
    try{
    const id = req.params.id
    const category = await Category.findById(id)
    if(!category){
      return res.status(404).json({message:"category are not found"})
    }else{
      return res.status(200).json({message:"Category founded successfully"})
    }
  }catch(error){
    return res.status(500).json({message:"category are not deleted"})
  }
}
}

export default CategoryController