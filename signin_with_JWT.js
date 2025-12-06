import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/dbConfig.js";
import { StudentLoginSchema } from "./schema/userSchema.js";

dotenv.config();


await connectDB();



const StudentLogin = mongoose.model("Student_login", StudentLoginSchema);

// ----- Login Function -----
const login = async (email, password) => {
  const student = await StudentLogin.findOne({ email });
  if (!student) {
    console.log("User not found!");
    return;
  }

  const isMatch = await bcrypt.compare(password, student.hashedPassword);
  if (!isMatch) {
    console.log("Invalid password!");
    return;
  }

  // Generate JWT
  const token = jwt.sign(
    { userId: student._id, email: student.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  console.log("Login Successful!");
  console.log("JWT Token:", token);
};


await login("chinedu@gmail.com", "nedu123"); // login and get JWT
