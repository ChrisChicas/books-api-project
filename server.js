const express = require("express")
const mongoose = require("mongoose")
const booksController = require("./contorllers/books-controller.js")
const cors = require("cors")

const app = express()
require("dotenv").config()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to mongo at:", process.env.MONGO_URI)
})


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use("/books", booksController)

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Books API!"
    })
})

app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
})