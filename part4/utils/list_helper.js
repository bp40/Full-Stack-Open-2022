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

module.exports = {
    dummy,
    totalLikes
}