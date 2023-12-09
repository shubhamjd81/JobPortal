import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/JobPortal");
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
