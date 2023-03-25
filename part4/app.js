const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const logger = require("./utils/logger");

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node index.js <password>');
    process.exit(1);
}

mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        logger.info("connected to mongo")
    })
    .catch(() => {
        logger.error("error connecting to mongo")
    })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
