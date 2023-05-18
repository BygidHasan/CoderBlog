const express = require("express");
const dotenv = require("dotenv");

const Connection = require("./config/dbConnection.js");

const app = express();

dotenv.config();

app.get("/", (req, res) => {
   res.json("Hello from the homepage");
})
app.get("/:id", (req, res) => {
   console.log(first)
   res.json("Hello from the homepage");

})
app.get("/", (req, res) => {
   res.json("Hello from the homepage");
})
app.get("/", (req, res) => {
   res.json("Hello from the homepage");
})


app.listen(process.env.PORT, (req,res) => {
   console.log("server is on");
})

Connection(process.env.DB_USERNAME, process.env.DB_PASSWORD);