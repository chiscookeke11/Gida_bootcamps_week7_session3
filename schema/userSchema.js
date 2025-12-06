import mongoose from "mongoose";

export const StudentLoginSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    hashedPassword: String
});
