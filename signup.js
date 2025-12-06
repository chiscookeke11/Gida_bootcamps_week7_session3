import bcrypt from "bcrypt"
import dotenv from "dotenv"
import mongoose from "mongoose";
import { StudentLoginSchema } from "./schema/userSchema.js";
import { connectDB } from "./config/dbConfig.js";



dotenv.config()


const email = "chinedu@gmail.com";
const password = "nedu123";
const hashedPassword = await bcrypt.hash(password, 10)

console.log("this is the hashed password:", hashedPassword)


const StudentLogin = mongoose.model("Student_login", StudentLoginSchema)

connectDB().then(() => {
    console.log("Database connected!")


    StudentLogin.create({
        email: email,
        hashedPassword: hashedPassword,
    })
        .then(() => console.log("Sign Up successful!"))
})
    .catch(err => console.log("DB error", err))



