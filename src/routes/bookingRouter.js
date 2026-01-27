import express from "express"
import BookingController from "../controller/bookingController.js"
import { VerifyAcess } from "../midleware/verifyAcess.js"


const router = express.Router()
router.post("/bookingService",VerifyAcess('provider'),BookingController.Booking)
router.get("/getAllBookings",BookingController.getAllBookings)

router.delete("/deleteAllBookings",BookingController.deleteAllBookings)

router.delete("/deleteOneBooking/:id",BookingController.deleteOneBooking)


router.get("getOneBooking/:id",BookingController.getOneBookig)
router.put("/changeStatus/:id",BookingController.changeStatus)

export default router