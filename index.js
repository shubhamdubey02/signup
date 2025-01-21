import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv, { parse } from "dotenv";
import router from "./router/userSignupRouter.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("Database connect successfull");
    })
    .catch((error) => console.log(error));

app.use("/api/user", router)

app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`);
});