const Movie = require('../../models/movie')

const getMovies = async () => {
    try {
        const movies = await Movie.find({}).populate({
            path: "categories",
            select: "name slug"
        });

        return movies;
    } catch (error) {
        throw error;
    }
}

module.exports = getMovies;