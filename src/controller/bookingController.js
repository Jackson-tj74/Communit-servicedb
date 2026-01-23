import BookingService from "../model/bookingModel.js";
import Service from "../model/serviceModel.js";


class BookingController{

    static Booing =async(req,res)=>{
        const {serviceId,date,time,status,notes}=req.body
        const service = await Service.findById(serviceId)

        if(!service){
            return res.status(404).json({message:"service not found"})
        }else{
            const userId = req.user?._id
        if(!userId){
            return res.status(404).json({message:"please login"})
        }else{
            let booking =await BookingService.create({
                serviceId,
                date,
                time,
                status,
                notes,
                clientId:userId
            });
            
            booking= await booking.populate([
            {path:"clientId",select:"names email"},
           {path:"serviceId",select:"title"}
       ]);

       return res.status(201).json({ message: "Service successfully created",service});
            
       }

        }
        }
        
  }
   
   export default BookingController
   
   