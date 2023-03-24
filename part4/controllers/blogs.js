const blogsRouter = require('express').Router()
const Blog = require('../models/Blog')
const {info, error} = require("../utils/logger");

blogsRouter.get('/', (request, response) => {
    info("GET /api/blogs ")
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

blogsRouter.post('/', (request, response, next) => {
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
        .catch(error => next(error))
})

blogsRouter.delete('/', (request, response, next) => {
    info('DELETE /api/blogs')

    const body = request.body

    //TODO: error on invalid json

    if (!body.title || !body.author || !body.url) {
        error("incomplete DELETE request")
        return response.status(400).json({
            error: 'title, author, or url missing'
        })
    }

    Blog.deleteOne({
        title: body.title,
        author: body.author,
        url: body.url
    }).then((numDeleted => {
        info(`delete ${numDeleted} blog entry`);
        response.status(204).end()
    })).catch(error => next(error))

})

module.exports = blogsRouter
