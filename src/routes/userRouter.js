import express from "express"
import Controller from "../controller/userController.js"
import { EmailExist } from "../midleware/validation.js";
import { VerifyAcess } from "../midleware/verifyAcess.js";

const router = express.Router();
router.post("/user",EmailExist,Controller.signup)
router.post("/user/login",Controller.login)
router.get("/users",VerifyAcess('admin'),Controller.getAllUsers)

router.delete("/deleteUsers",Controller.deleteAllUsers)
router.delete("/delete/:id",Controller.deleteOneUser)
router.patch("/user/:id",Controller.updateUser)
export default router;