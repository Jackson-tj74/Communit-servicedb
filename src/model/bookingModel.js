import mongoose from "mongoose"


const bookingSchema= new mongoose.Schema({

    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"


    },
    serviceId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Service"

    },
    date:{
        type:Date,
        require:[true,"please specify  time you need to get  service"]

    },
    time:{
        type:String,
        required:[true,"please specify the hour you want service"]


    },
    statuses:{
        type:String,
        enum:['pending','accepted','completed','canceled'],
        default:'pending'
    },
    notes:{
        type:String,
        required:false
    },
    createAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
bookingSchema.pre(/^find/,function(){
    this.populate([
        {path:"clientId",select:"names email"},
        {path:"serviceId",select:"title"}
    ])
})
const BookingService=mongoose.model("Bookingservice",bookingSchema)
export default BookingService