const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
const ArticleModel = require("./models/Article")
mongoose.connect("mongodb://localhost:27017/truths")

app.post('/home',(req,res)=>{
    ArticleModel.create(req.body)
    .then(Articles=>res.json(Articles))
    .catch(err => res.json(err))
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})