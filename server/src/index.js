import express from "express"
import cors from "cors"
import Mongoose from 'mongoose'

import dotenv from "dotenv"
dotenv.config()

import { controllerRouter } from "../routes/controllerMenu.js"
import { userRouter } from "../routes/user.js"

const app = express()

app.use(express.static('public'));
app.use(express.json())
app.use(
    cors({})
)

const localDB = process.env.DB;
const connectDB = async () => {
    await Mongoose.connect(localDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Mongodb connected");
}
connectDB()

app.use("/", controllerRouter) 
app.use("/", userRouter)

const APP = process.env.APP;

const server = app.listen(APP, () => console.log("Server started"))
// Handling err
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })