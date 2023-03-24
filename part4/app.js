const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const {info, error} = require('./utils/logger')
const blogsRouter = require('./controllers/blogs')



if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node index.js <password>');
    process.exit(1);
}

mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app
