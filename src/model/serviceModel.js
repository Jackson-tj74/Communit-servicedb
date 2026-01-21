import mongoose from "mongoose";


const ServiceSchema = mongoose.Schema({
    title:{
        type:String,
        require:[true,"Please title required"]
    },
    description:{
        type:String,
        required:[true,"please description required"]
    },
    categorys:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    price:{
        type:Number,
        reqiured:[true,"please price required"]
    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createAt:{
        type:Number,
        default:new Date(Date.now())

    }
})

ServiceSchema.pre(/^find/, function () {
  this.populate(
    { path: "categorys", select: "categoryName" }
  ).populate(
    { path: "provider", select: "names email" }
    
    
  );
  
  
});


const Service = mongoose.model("Service",ServiceSchema)
export default Service