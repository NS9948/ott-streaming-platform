const Category = require("../models/categories");
const Movie = require("../models/movie");

const getMoviesController = async (req, res) => {
    try {
        let {
            search,
            type,
            category,
            page = 1,
            limit = 20,
        } = req.query;

        page = Number(page);
        limit = Number(limit);

        if (!page || page < 1) page = 1;
        if (!limit || limit < 1) limit = 20;

        const skip = (page - 1) * limit;

        const query = {};

        if (search) {
            query.$or = [
                {
                    title: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    description: {
                        $regex: search,
                        $options: "i",
                    },
                },
            ];
        }

        if (type) {
            query.type = Array.isArray(type)
                ? { $in: type }
                : type;
        }

        if (category) {
            query.categories = Array.isArray(category)
                ? { $in: category }
                : category;
        }

        const [totalMovies, movies] = await Promise.all([
            Movie.countDocuments(query),

            Movie.find(query)
                .populate("categories", "name slug")
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
        ]);

        return res.status(200).json({
            success: true,
            pagination: {
                currentPage: page,
                limit,
                totalMovies,
                totalPages: Math.ceil(totalMovies / limit),
                hasNextPage: page < Math.ceil(totalMovies / limit),
                hasPreviousPage: page > 1,
            },
            movies,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

const filterMovieController = async (req,res) => {
    try {
        const [categories, types] = await Promise.all([
            Category.find(
                {isActive: true},
                "name slug"
            ).sort({name: 1}).lean(),
    
            Movie.distinct("type")
        ])
    
        return res.status(200).json({
            success: true,
            categories,
            types
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
    
}

module.exports = {
    getMoviesController,
    filterMovieController
};