import mongoose from "mongoose";


export const connectDB = async () =>{
  await mongoose.connect('mongodb+srv://enockkimutai2004:Password%40123@cluster0.wa0tfkv.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}