import nodemailer from "nodemailer"


export const sendEmailNotification = async(reciever,content,sub)=>{
    const transpoter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.NODEMAILER_EMAIL,
        password:process.env.NODEMAILER_PASSWORD 

    }
})
 await transpoter.sendMail({
 from:process.env.NODEMAILER_EMAIL,
 to:reciever,
 subject:sub,
 html:`${content}`
 })
}