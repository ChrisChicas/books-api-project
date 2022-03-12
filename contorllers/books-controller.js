const express = require("express")
const books = express.Router()
const Book = require("../models/books-model.js")

books.get("/", async (req, res) => {
    try {
        let foundBooks = await Book.find()
        res.status(200).json(foundBooks)
    } catch (error) {
        res.status(404).json(error)
    }
})

books.get("/:id", async (req, res) => {
    try {
        let foundBook = await Book.findById(req.params.id)
        res.status(200).json(foundBook)
    } catch (error) {
        res.status(404).json(error)
    }
})

books.post("/", async (req, res) => {
    try {
        let createBook = await Book.create(req.body)
        res.status(201).json(createBook)
    } catch (error) {
        res.status(404).json(error)
    }
})

books.put("/:id", async (req, res) => {
    try {
        let updateBook = await Book.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updateBook)
    } catch (error) {
        res.status(404).json(error)
    }
})

books.delete("/:id", async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Book deleted."
        })
    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = books
