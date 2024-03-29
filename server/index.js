require('dotenv').config();

const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const port = process.env.PORT || 3000
const mongoUrl = process.env.MONGO_URL

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "veggies"
  };

app.use(cors({
  credentials : true,
  origin : [ 
              "https://hind-nine.vercel.app",
              "http://localhost:5173",
            ]
}))

app.use(function(req,res,next){
  res.header("Content-Type", "application/json;charseu=UTF-8")
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin")
  res.header("Origin, X-requested-With, Content-Type, Accept")
  next()
})

const userRouter = require("./routes/user")

app.use(express.json())
app.use("/user",userRouter)

mongoose.connect(mongoUrl, mongoOptions);

app.listen(port, () => console.log(`Server is running on port ${port}`))
