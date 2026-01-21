import express from "express"
import CategoryController from "../controller/categoryController.js"
import { CategoryExist } from "../midleware/validation.js"


const router = express.Router()
router.post("/create",CategoryExist,CategoryController.createCategory)
router.get("/categories",CategoryController.getAllCategories)

router.delete("/deleteCategory/:id",CategoryController.deleteOneCategory)
router.delete("/deleteAllCategories",CategoryController.deleteAllCategories)
router.patch("/updateCategory/:id",CategoryController.updateCategory)
router.get("/getOnecategory/:id",CategoryController.getOneCategory)



export default router