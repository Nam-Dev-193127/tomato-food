import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://tomato-food:19032001@cluster0.kx1wl1e.mongodb.net/food-app').then(()=>console.log("DB Connected"));
}