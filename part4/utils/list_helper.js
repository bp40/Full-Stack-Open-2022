const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {

    if (blogs.length === 0) {
        return 0
    }

    let sumLikes = 0
    for (let i = 0; i < blogs.length; i++) {
        sumLikes += blogs[i].likes
    }

    return sumLikes
}

const favoriteBlog = (blogs) => {

    if (blogs.length === 1) {
        return blogs[0]
    }

    let highestLikes = 0
    let favoriteIndex = 0
    for (let i = 0; i < blogs.length; i++) {
        if (highestLikes < blogs[i].likes) {
            highestLikes = blogs[i].likes
            favoriteIndex = i
        }
    }

    return {
        title: blogs[favoriteIndex].title,
        author: blogs[favoriteIndex].author,
        likes: highestLikes
    }

}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}