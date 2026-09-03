const User = require('../../models/User')
const Movie = require('../../models/movie')

const getDashboardData = async () => {
    const [
        totalUsers,
        totalMovies,
        latestMovies,
        recentUsers
    ] = await Promise.all([
        User.countDocuments({ role: "user" }),
        Movie.countDocuments(),
        Movie.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select("title banner"),
        User.find({ role: "user" })
            .sort({ createdAt: -1 })
            .limit(5)
            .select("email createdAt"),
    ]);

    return {
            stats: {
                totalUsers,
                totalMovies,
            },
            latestMovies,
            recentUsers,
        }
}

module.exports = getDashboardData