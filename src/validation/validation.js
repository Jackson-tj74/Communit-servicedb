
import Joi from "joi"

export const signSchema = Joi.object({



    email:Joi.string()
    .email()
    .required()
    .messages({
        'any required':'email is required',
        'string.base':'email must be a valid email',
        'string.base':'email should  be a type string',
        'string.base':'email is not allowewd to be empty field'
        
   
    
    }), 
    password:Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/)
    .messages({
    'string.base':'password should be a type text',
    'string.empty':'Password can not be empty',
    'string.min':'Password should have miinimum length of 8',
    'string.pattern':"Password should cotain atleast one upperCase ,one lower case ,one number",
    'any.required':"Password is required"
}),
role: Joi.string()
    .valid("admin", "client", "provider")
    .messages({
      "string.base": "Role must be a string",
      "any.only": "Role must be admin, client, or provider"
      
    })

   

})
export const signupSchema = Joi.object({

    names: Joi.string()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-Z\s]+$/)
    .required()
    .messages({
      "string.base": "Name must be a string",
      "string.empty": "Name cannot be empty",
      "string.min": "Name must be at least 3 characters long",
      "string.max": "Name must be less than 30 characters",
      "string.pattern.base": "Name can only contain letters and spaces",
      "any.required": "Name is required"
    }),

  
    

   email:Joi.string()
   .email()
   .required()
   .messages({
        'any required':'email is required',
        'string.base':'email must be a valid email',
        'string.base':'email should  be a type string'
        ,
        'string.base':'email is not allowewd to be empty field'
    }),

    password:Joi.string()
    .min(8)
    .max(20)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/
)
    .messages({
    'string.words':'password should be a type text',
    'string.empty':'Password can not be empty',
    'string.min':'Password should have miinimum length of 8',
    'string.pattern.base':"Password should cotain atleast one upperCase ,one lower case ,one number,one scpecial character",
    'any.required':"Password is required"
}),
  role: Joi.string()
    .valid("admin", "client", "provider")
    .required()
    .messages({
      "string.base": "Role must be a string",
      "any.only": "Role must be admin, client, or provider",
      "any.required": "Role is required"
    })
 


})
export const createCategory = Joi.object({
 categoryName:Joi.string()
 .required()
 .valid("Plumbing","Painting","pharmacy","Application Services","Electronics")
 .messages({
    'string.base':'CategoryName should be a type text',
    'string.empty':'CategoryName  can not be empty',
    'any.required':'CategoryName  is required',
    'any.only':'categoryName must be in this "Plumbing","Painting","pharmacy","Application Services","Electronics" '
 })
})