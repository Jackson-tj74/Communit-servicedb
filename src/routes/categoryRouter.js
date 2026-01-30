import express from "express"
import CategoryController from "../controller/categoryController.js"
import { CategoryExist } from "../midleware/validation.js"
import { VerifyAcess } from "../midleware/verifyAcess.js"
import { createCategory } from "../validation/validation.js"
import { routeBodyValidation } from "../midleware/requestMidleware.js"


const router = express.Router()
router.post("/create",routeBodyValidation(createCategory),VerifyAcess(['provider','admin']),CategoryExist,CategoryController.createCategory)
router.get("/getAllCategories",VerifyAcess(['provider','admin']),CategoryController.getAllCategories)

router.delete("/deleteCategory/:id",VerifyAcess(['provider','admin']),CategoryController.deleteOneCategory)
router.delete("/deleteAllCategories",VerifyAcess(['provider','admin']),CategoryController.deleteAllCategories)
router.patch("/updateCategory/:id",VerifyAcess(['provider','admin']),CategoryController.updateCategory)
router.get("/getOnecategory/:id",VerifyAcess(['provider','admin']),CategoryController.getOneCategory)



export default router