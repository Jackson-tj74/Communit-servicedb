import BookingService from "../model/bookingModel.js";
import Service from "../model/serviceModel.js";


class BookingController{

    static Booking =async(req,res)=>{
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
                customerName: user.name,
                customerEmail: user.email,
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
        static getAllBookings =async (req,res)=>{
                
                
                const bookings  = await BookingService.find(req.body)
        
                if(!bookings){
                    return res.status(404).json({message:"Bookings  not be got"})
        
                }else{
                    return res.status(201).json({message:"Bookings   founded successfully",bookings })
        
                }
        
                }
               
                static deleteOneBooking = async (req, res) => {
          
                  try {
            
                    const { id } = req.params.id
                  const booking = await BookingService.findByIdAndDelete(id,req.body,{new:true})
        
                if (!booking) {
                return res.status(404).json({ message: "Booking  not found" })
               }
        
               return res.status(200).json({ message: "Booking deleted successfully" })
              } catch (error) {
              console.error(error);
               return res.status(500).json({ message: "Booking  not deleted" })
               }
                }
        
                 static deleteAllBookings=async(req,res)=>{
                 const bookings = await BookingService.find(req.body )
                  if(!bookings){
                  return res.status(404).json({message:"Bookings not found"})
                }else{
                  return res.status(200).json({message:"Bookings  deleted successfully"})
                }
                }
        
        //         static updateBooking =async (req,res)=>{
        //           try{
        //           const id = req.params.id
        //           const booking= await BookingService.findByIdAndUpdate(id)
        //           if(!booking){
        //              return res.status(404).json({message:"Bookings  not found"})
        
        //           }else{
        //              return res.status(200).json({message:"Bookings  updated successfully",booking})
        //           }
        //         }catch (error) {
        //         console.error(error);
        //        return res.status(500).json({ message: "Failed to update user"});
          
        
        //         }
        //   }
        
          static getOneBookig =async(req,res)=>{
            try{
            const id = req.params.id
            const booking = await BookingService.findById(id)
            if(!booking){
              return res.status(404).json({message:"Booking are not found"})
            }else{
              return res.status(200).json({message:"Booking founded successfully"})
            }
          }catch(error){
            return res.status(500).json({message:"Booking are not deleted"})
          }
        }
        static changeStatus = async (req,res)=>{
            const id = req.params.id
            if(!id){
            return res.status(404).json({message:`There are no service booked on this ${id}`})
            }else{
                const booking = await BookingService.findByIdAndUpdate({id})
                return res.status(500).json({message:"Status changed successfully"})
            }
        }
  }
   
   export default BookingController
   
   