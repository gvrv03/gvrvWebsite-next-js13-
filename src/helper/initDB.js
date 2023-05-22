import mongoose from "mongoose";

const initDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongoDB connection `);
  } catch (err) {
    console.log(`No connection `);
  }
};

export default initDB;
