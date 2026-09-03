const User = require("../models/User");
const Movie = require("../models/movie");

const watchListController = async (req,res) => {
    try {
        const { movieId } = req.params;
        const userId = req.user.id;

        const movieFound = await Movie.findById( movieId )

        if(!movieFound){
            return res.status(404).json({
                message: "Movie doesnt exist!!"
            })
        }

        const updatedUser = await User.findByIdAndUpdate(userId, {
            $addToSet:{
                watchlist: movieId
            }},
            { new: true }
        )

        if(!updatedUser){
            return res.status(400).json({
                message: "user not found"
            })
        }

        return res.status(200).json({
            message: "Added to watchlist!!",
            data: {
                movieId
            }
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Server Failure!!"
        })
    }
    
}

const getWatchListController = async (req,res) => {
    try {
        const user = await User.findById(req.user.id).populate({
            path: "watchlist",
            select: "banner title description type rentPrice categories",
            populate: {
                path: "categories",
                select: "name slug"
            }
        });

        if(!user){
            return res.status(400).json({
                message: "user not found"
            })
        }

        return res.status(200).json({
            data: user.watchlist
        });
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Server Failure!!"
        })
    }
    

}

const deleteWatchListController = async (req,res) => {
    try {
        const { movieId } = req.params
        const movie = await Movie.findById(movieId)
        if(!movie){
            return res.status(400).json({
                message: "Movie doesnt exist!!"
            })
        }

        const deleteWatchlist = await User.findByIdAndUpdate(req.user.id, {
            $pull: {
                watchlist: movieId
            }},
            { new: true }
        )

        if(!deleteWatchlist){
            return res.status(404).json({
                message: "User not found!!"
            })
        }

        return res.status(200).json({
            message: "Movie deleted form watchlist successfully",
            data: {
                movieId
            }
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Server failure!!"
        })
    }
    

}

module.exports = {
    watchListController,
    getWatchListController,
    deleteWatchListController
};