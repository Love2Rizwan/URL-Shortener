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

  // Route App
app.use("/api", route)




// // server the frontend
// const path = require("path");


// app.use(
//   express.static(path.join(__dirname, "./Frontend/dist"), {
//     setHeaders: function (res, path) {
//       if (mime.getType(path) === "application/javascript") {
//         res.setHeader("Content-Type", "application/javascript");
//       }
//     },
//   })
// );



// app.get("*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../Frontend/dist/index.html"),
//     function (err) {
//       res.status(500).send(err)
//     }

//   )
// })


// PORT
const port = process.env.PORT||5000 

// Listen server
app.listen(port,function(){
    console.log("Server is running port " + port )
})

