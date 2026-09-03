const Movie = require('../models/movie')
const { uploadToS3 } = require('../services/s3Service')

const createMovieController = async (req, res) => {
    try {
        const {
            title,
            description,
            type,
            rentPrice,
            movieLink
        } = req.body

        // CHANGE 1: Get categories separately
        let categories = req.body.categories

        // CHANGE 2: Convert single category into an array
        if (categories && !Array.isArray(categories)) {
            categories = [categories]
        }

        if (!req.file) {
            return res.status(400).json({
                message: "No file exists add it and try again!!"
            })
        }

        if (!title || !description || !type || !rentPrice || !movieLink) {
            return res.status(400).json({
                message: "All required fields must be provided."
            });
        }

        // CHANGE 3: categories is normalized now
        if (!categories || categories.length === 0) {
            return res.status(400).json({
                message: "At least one category is required."
            });
        }

        const bannerUrl = await uploadToS3(req.file);

        const movie = await Movie.create({
            title,
            description,
            banner: bannerUrl,
            type,
            categories,
            rentPrice: Number(rentPrice),
            movieLink
        })

        return res.status(201).json({
            success: true,
            message: "Movie uploaded successfully.",
            movie
        });

    } catch (error) {
        console.error("CREATE MOVIE ERROR:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = createMovieController;