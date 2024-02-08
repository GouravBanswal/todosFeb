const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }
},{timeStamps: true})

module.exports = mongoose.model("todo", todoSchema)