import express from "express"
import Controller from "../controller/userController.js"
import { EmailExist } from "../midleware/validation.js";

const router = express.Router();
router.post("/user",EmailExist,Controller.signup)
router.post("/user/login",Controller.login)
router.post("/users",Controller.getAllUsers)
router.delete("/deleteUsers",Controller.deleteAllUsers)
router.delete("/delete/:id",Controller.deleteOneUser)
export default router;