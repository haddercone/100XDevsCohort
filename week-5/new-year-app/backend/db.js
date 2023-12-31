require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected succesfully!"));

const TodoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed: Boolean,
})

const todo = mongoose.model('todos', TodoSchema)

module.exports = {
    todo
}