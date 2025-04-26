import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import incidentRoutes from "./routes/incidentroutes";
import { errorHandler } from "./middlewares/errorHandler"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use("/", incidentRoutes);

app.use(errorHandler); 

const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is required");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME || "backend",
    });

    console.log("MongoDB connected successfully!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

startServer();

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
