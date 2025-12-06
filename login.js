import bcrypt from "bcrypt";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { StudentLoginSchema } from "./schema/userSchema.js";
import { connectDB } from "./config/dbConfig.js";

dotenv.config();

await connectDB();
console.log("Database connected!");


const StudentLogin = mongoose.model("Student_login", StudentLoginSchema);

const email = "chinedu@gmail.com";
const inputPassword = "nedu123";


const student = await StudentLogin.findOne({ email: email });

if (!student) {
    console.log("User not found!");
    process.exit(0);
}

console.log("Student record:", student);


const isMatch =  bcrypt.compare(inputPassword, student.hashedPassword);

if (isMatch) {
    console.log("Login Successful!");
} else {
    console.log("Invalid password!");
}
