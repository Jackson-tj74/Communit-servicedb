import express from "express"
import Controller from "../controller/userController.js"


import { VerifyAcess } from "../midleware/verifyAcess.js";
import { EmailExist } from "../midleware/validation.js";
import { routeBodyValidation } from "../midleware/requestMidleware.js";
import { signupSchema, signSchema } from "../validation/validation.js";


const router = express.Router();
router.post("/create",EmailExist,routeBodyValidation(signupSchema),Controller.signup)
router.post("/login",routeBodyValidation(signSchema),Controller.login)
router.get("/users",VerifyAcess(['admin']),EmailExist,Controller.getAllUsers)

router.delete("/deleteUsers",VerifyAcess(['admin']),Controller.deleteAllUsers)
router.delete("/delete/:id",VerifyAcess(['admin']),Controller.deleteOneUser)
router.patch("/upadate/:id",VerifyAcess(['admin']),Controller.updateUser)
export default router