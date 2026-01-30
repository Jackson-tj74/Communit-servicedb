import express from "express"
import ServiceController from "../controller/servicesController.js"
import { VerifyAcess } from "../midleware/verifyAcess.js"
import { ServiceExist } from "../midleware/validation.js"




const router = express.Router()
router.post("/create",VerifyAcess('provider'),ServiceExist,ServiceController.createService)
router.get("/getAllServices",ServiceController.getAllServices)
router.delete("/deleteAllServices",VerifyAcess(["provider",'admin']),ServiceController.deleteAllServices)
router.delete("/deleteOneService/:id",VerifyAcess(["provider",'admin']),ServiceController.deleteOneService)
router.patch("/updateService/:id",VerifyAcess(["provider",'admin']),ServiceController.UpdateServices)
router.get("getOneSevice/:id",VerifyAcess(["provider",'admin']),ServiceController.getOneService)


export default router