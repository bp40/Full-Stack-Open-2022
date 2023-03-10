
const PORT = process.env.PORT || 3003
const password = process.argv[2];
const MONGODB_URI = `mongodb+srv://fso40:${password}@fso2022.a8f1h.mongodb.net/?retryWrites=true&w=majority`

module.exports = {
    MONGODB_URI,
    PORT
}
