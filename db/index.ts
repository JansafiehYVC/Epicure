import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect("mongodb+srv://JanSafieh123:janjanjan@cluster0.mc3s3g5.mongodb.net/Epicure");
};

export { connectDb }

