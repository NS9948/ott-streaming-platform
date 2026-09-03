const Movie = require("../models/movie")
const { uploadToS3, deleteFromS3 } = require("../services/s3Service")

const updateMovieController = async (req, res) => {
    try {
        const { id } = req.params

        const movie = await Movie.findById(id)

        if (!movie) {
            return res.status(404).json({
                message: "No movie found!!"
            })
        }

        const {
            title,
            description,
            type,
            rentPrice,
            movieLink
        } = req.body

        let categories = req.body.categories

        if (categories && !Array.isArray(categories)) {
            categories = [categories]
        }

        const updatedData = {}

        if (title) updatedData.title = title
        if (description) updatedData.description = description
        if (type) updatedData.type = type
        if (movieLink) updatedData.movieLink = movieLink

        if (rentPrice !== undefined) {
            updatedData.rentPrice = Number(rentPrice)
        }

        if (categories && categories.length === 0) {
            return res.status(400).json({
                success: false,
                message: "At least one category is required."
            })
        }

        if (categories) {
            updatedData.categories = categories
        }

        const oldBanner = movie.banner

        if (req.file) {
            const bannerUrl = await uploadToS3(req.file)
            updatedData.banner = bannerUrl
        }

        const updatedMovie = await Movie.findByIdAndUpdate(
            id,
            updatedData,
            {
                new: true,
                runValidators: true
            }
        ).populate("categories", "name slug")

        if (req.file && oldBanner) {
            try {
                await deleteFromS3(oldBanner)
            } catch (error) {
                console.error(
                    "Failed to delete old banner:",
                    error
                )
            }
        }

        return res.status(200).json({
            success: true,
            message: "Details of movie updated successfully!!",
            movie: updatedMovie
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            success: false,
            message: "Server failure!!"
        })
    }
}

module.exports = updateMovieController