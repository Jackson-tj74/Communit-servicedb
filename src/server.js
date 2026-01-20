import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

import bodyParser from "body-parser"
import router from "./routes/index.js"


dotenv.config()

const app= express()
app.use(bodyParser.json())
app.use("/api/v1",router)


const port = process.env.PORT
const db = process.env.DATABASE


mongoose.connect(db).then(()=>{
    console.log("Database connected successfully")

    app.listen(port, ()=>{console.log(`database is running on ${port}`)})
    
    })
   
    
 .catch((error)=>{
        console.log(`Error is ${error}`)
    })

