import express from "express"
import Controller from "../controller/userController.js"


import { VerifyAcess } from "../midleware/verifyAcess.js";
import { EmailExist } from "../midleware/validation.js";
import { routeBodyValidation } from "../midleware/requestMidleware.js";
import { signupSchema, signSchema } from "../validation/validation.js";


const router = express.Router();

router.post("/create",routeBodyValidation(signupSchema),EmailExist,Controller.signup)
router.post("/login",routeBodyValidation(signSchema),Controller.login)
router.get("/users",Controller.getAllUsers)

router.delete("/deleteUsers",VerifyAcess(['admin']),Controller.deleteAllUsers)
router.delete("/delete/:id",VerifyAcess(['admin']),Controller.deleteOneUser)
router.patch("/upadate/:id",VerifyAcess(['admin']),Controller.updateUser)
router.get("/verify/:verifyToken",Controller.verifyEmailAccount)
export default router