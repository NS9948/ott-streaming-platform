const getMovies = require("../../services/admin/movieService");

const moviesController = async (req,res) => {
    try {
        const data = await getMovies()

        return res.status(200).json({
            "success": true,
            "data": data
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success": false,
            message: "Internal Server Error!!"
        })
    }
    
}

module.exports = moviesController
