import express from "express"
import BookingController from "../controller/bookingController.js"
import { VerifyAcess } from "../midleware/verifyAcess.js"


const router = express.Router()
router.post("/bookingService",VerifyAcess('client'),BookingController.Booing)

export default router