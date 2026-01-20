import express from "express"
import ServiceController from "../controller/servicesController.js"
import { VerifyAcess } from "../midleware/verifyAcess.js"


const router = express.Router()
router.post("/create",VerifyAcess("provider"),ServiceController.createService)
export default router