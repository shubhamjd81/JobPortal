import express from "express";
import dotenv from "dotenv";
import connect from "./config/db.js";

const app = express();
dotenv.config();
connect();

// server running

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server running: " + PORT);
});
