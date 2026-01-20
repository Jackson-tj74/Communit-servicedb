import express from "express"
import CategoryController from "../controller/categoryController.js"


const router = express.Router()
router.post("/create",CategoryController.createCategory)
router.get("/categories",CategoryController.getAllCategories)
router.delete("/deleteAllCategories/:id",CategoryController.deleteOneCategory)

export default router