const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/Blog')

const initialBlogs = [
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
    },
    {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
    },
    {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        //likes is missing for test
        __v: 0
    }
]
beforeEach(async () => {
    await Blog.deleteMany({})

    let blogObj = new Blog(initialBlogs[0])
    await blogObj.save()

    blogObj = new Blog(initialBlogs[1])
    await blogObj.save()

    blogObj = new Blog(initialBlogs[2])
    await blogObj.save()
})

test('blogs api return correct number of blogs', async () => {
    const response = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    expect(response.body).toHaveLength(initialBlogs.length)
}, 10000)

test('id exists (not _id)', async () => {
    const response = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    expect(response.body[0].id).toBeDefined()
}, 10000)

afterAll(async () => {
    await mongoose.connection.close()
})

