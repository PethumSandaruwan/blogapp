import mongoose, { mongo } from "mongoose";

export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://pethumsandaruwan007:AsbNAV7th3NAPtZf@cluster0.g7rrj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("DB Connected")
}
