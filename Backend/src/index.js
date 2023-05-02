const cors =require('cors')
const express = require("express")
const route = require("./route/route")
const mongoose = require("mongoose")
const connectDB = require("./config/db")
const dotenv = require("dotenv")





// Create Express App
const app = express()

// configure dotenv
dotenv.config();

// Middleware
app.use(express.json())


// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
app.use(cors());


// Connect MongoDB 
connectDB();

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});

  // Route App
app.use("/api", route)


// PORT
const port = process.env.PORT||5000 

// Listen server
app.listen(port,function(){
    console.log("Server is running port " + port )
})

