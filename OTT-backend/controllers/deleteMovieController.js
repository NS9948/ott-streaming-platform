const Movie = require("../models/movie")
const { deleteFromS3 } = require("../services/s3Service")

const deleteMovieController = async (req,res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id)

        if(!movie){
            return res.status(404).json({
                message: "No such Movie exists!!"
            })
        }

        const oldBanner = movie.banner
        const deletedMovie = await Movie.findByIdAndDelete(id)

        try {
            await deleteFromS3(oldBanner)
        } catch (error) {
            console.error("Failed to delete banner:", error);
        }

        return res.status(200).json({
            message: "Movie deleted Successfully!!",
            movie: deletedMovie
        })


    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Server failure!!"
        })
    }
    


}

module.exports = deleteMovieController