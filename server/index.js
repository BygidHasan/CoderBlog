import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

const port = process.env.PORT || 4000
const MONGO_URI = process.env.MONGODB_URL

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected!'))
    .catch((e) => console.log(e.message))


app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => console.log(`server is running at http://localhost:${port}`))