import http from "http";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()
import contactRoutes from "./src/api/contact.js";

 
const app = express();

app.use(cors());

app.use(express.json({limit:"200mb"}))   
app.use(express.urlencoded({limit:"200mb",extended:true}))
 
app.use("/api/contact", contactRoutes);

const port= process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




 

