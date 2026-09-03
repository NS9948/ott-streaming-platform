const User = require("../models/User")
const Movie = require("../models/movie")

const likeMovieController = async (req,res) => {
    try {
        const { movieId } = req.params
        const userId = req.user.id

        const movie = await Movie.findById(movieId)

        if(!movie){
            return res.status(404).json({
                message: "movie not found"
            })
        }

        const updated = await User.findByIdAndUpdate(userId,{
            $addToSet:{
                likedMovies: movieId
            }
        },{
            new:true
        })

        if(!updated){
            return res.status(404).json({
                message: "user not found"
            })
        }

        return res.status(200).json({
            message: "Movie added to liked movies successsfully"
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Server failure"
        })
        
    }

}

const getLikedMoviesController = async (req,res) => {
    try {
        const userId = req.user.id

        const user = await User.findById(userId).populate('likedMovies', 'title banner description')

        if(!user){
            return res.status(404).json({
                message: "User not found"
            })
        }

        return res.status(200).json({
            likeCollection : user.likedMovies
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "server failure"
        })
    }

}

const removeLikedMovieController = async (req,res) => {
    try {

        const { movieId } = req.params
        const userId = req.user.id

        const movie = await Movie.findById(movieId)
        if(!movie){
            return res.status(404).json({
                message: 'movie not found'
            })
        }

        const updatedUser = await User.findByIdAndUpdate(userId,{
            $pull: {
                likedMovies: movieId
            }
        },{
            new:true
        })

        if(!updatedUser){
            return res.status(404).json({
                message: "user not found"
            })
        }

        return res.status(200).json({
            message: "Movie deleted from liked movies successfully"
        })
        
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "server failure"
        })
    }
}

module.exports = {
    likeMovieController,
    getLikedMoviesController,
    removeLikedMovieController
}