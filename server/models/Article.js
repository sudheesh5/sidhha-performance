const mongoose = require('mongoose')
const ArticleSchema = new mongoose.Schema
({
    name:String,
    //also add image here
    description:String
})

const ArticleModel = mongoose.model("Articles",ArticleSchema)
module.exports = ArticleModel