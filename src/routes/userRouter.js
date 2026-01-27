import express from "express"
import Controller from "../controller/userController.js"


import { VerifyAcess } from "../midleware/verifyAcess.js";
import { EmailExist } from "../midleware/validation.js";


const router = express.Router();
router.post("/",EmailExist,Controller.signup)
router.post("/login",Controller.login)
router.get("/users",EmailExist,Controller.getAllUsers)

router.delete("/deleteUsers",Controller.deleteAllUsers)
router.delete("/delete/:id",Controller.deleteOneUser)
router.patch("/upadate/:id",Controller.updateUser)
export default router;