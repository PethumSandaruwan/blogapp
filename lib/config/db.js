import mongoose, { mongo } from "mongoose";

export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://pethumsandaruwan007:Apple@123@cluster0.90ru9.mongodb.net/blogapp');
    console.log("DB Connected")
}