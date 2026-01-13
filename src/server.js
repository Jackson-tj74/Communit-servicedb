import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"


dotenv.config()

const app= express()
const port = process.env.PORT
const db = process.env.DATABASE

app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
});

mongoose.connect(db).then(()=>{
    console.log("Database connected successfully")
    })
 .catch((error)=>{
        console.log(`Error is ${error}`)
    })

