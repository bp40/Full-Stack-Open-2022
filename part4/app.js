const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const {info, error} = require('./utils/logger')


const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node index.js <password>');
    process.exit(1);
}

mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
    info("GET /api/blogs ")
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

app.post('/api/blogs', (request, response) => {
    info("POST /api/blogs")
    const body = request.body

    //TODO: error on invalid json

    if (!body.title || !body.author || !body.url) {
        error("incomplete POST request")
        return response.status(400).json({
            error: 'title, author, or url missing'
        })
    }

    //TODO: sanitize string input

    const blog = new Blog(request.body);

    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

module.exports = app
