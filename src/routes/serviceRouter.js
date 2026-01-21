import express from "express"
import ServiceController from "../controller/servicesController.js"
import { VerifyAcess } from "../midleware/verifyAcess.js"


const router = express.Router()
router.post("/create",VerifyAcess("provider"),ServiceController.createService)
router.get("/getAllServices",ServiceController.getAllServices)
router.delete("/deleteAllServices",ServiceController.deleteAllServices)
router.delete("/deleteOneService/:id",ServiceController.deleteOneService)
router.patch("/updateService/:id",ServiceController.UpdateServices)
router.get("getOneSevice/:id",ServiceController.getOneService)

export default router