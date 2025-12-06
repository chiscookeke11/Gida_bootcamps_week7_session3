import dotenv from "dotenv";
import jwt from "jsonwebtoken"




dotenv.config();

const secret = process.env.JWT_SECRET


const token = jwt.sign(
    {
        userId: 123,
        email: "chisco@gmail.com"
    },
    secret,
    {
        expiresIn: "1h"
    }
);


console.log(token)


const data = jwt.verify(token, secret)
console.log(data)
