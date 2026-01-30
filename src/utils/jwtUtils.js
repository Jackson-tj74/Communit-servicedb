import jwt from "jsonwebtoken"

export const  generateToken = (id)=>{
return jwt.sign({ id:id }, process.env.SECRET_KEY, { expiresIn: "1d" })
}
export const decodingToken = (token) =>{
 return jwt.verify(token.trim(),process.env.SECRET_KEY)
}