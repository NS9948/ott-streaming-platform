const Movie = require("../../models/movie");
const HeroBanner = require("../../models/heroBanner");

const getHeroBanners = async () => {
    try {
        const heroBanners = await HeroBanner.find({})
            .populate({
                path: "movie",
                select: "title banner description type rentPrice movieLink categories",
                populate: {
                    path: "categories",
                    select: "name slug"
                }
            })
            .sort({ order: 1 });

        return heroBanners;
    } catch (error) {
        throw error;
    }
};

const getActiveHeroBanners = async () => {
    try {
        const heroBanners = await HeroBanner.find({ isActive: true })
            .populate({
                path: "movie",
                select: "title banner description type rentPrice movieLink categories",
                populate: {
                    path: "categories",
                    select: "name slug"
                }
            })
            .sort({ order: 1 });

        return heroBanners;
    } catch (error) {
        throw error;
    }
};

const createHeroBanners = async (movie,order) => {
    try {
        const movieExists = await Movie.findById(movie)
        if(!movieExists){
            throw new Error("Movie doesn't exist");
        }

        const heroBannerExists = await HeroBanner.findOne({ movie })
        if(heroBannerExists){
            throw new Error("Movie already Exits");
        }

        const orderExists = await HeroBanner.findOne({order: order});
        if(orderExists){
            throw new Error("New order required")
        }

        const heroBanner = await HeroBanner.create({
            movie,
            order
        })

        return heroBanner


    } catch (error) {
        throw error
    }
}

const updateHeroBanners = async (id, movie, order, isActive) =>{
    try {
        const heroBannerExists = await HeroBanner.findById(id)
        if(!heroBannerExists){
            throw new Error("Hero banner doesn't exists")
        }

        if (movie) {
            const movieExists = await Movie.findById(movie);
        
            if (!movieExists) {
                throw new Error("Movie doesn't exist");
            }
        }

        if (order !== undefined) {
            const duplicateOrderExists = await HeroBanner.findOne({
                order,
                _id: { $ne: id }
            });
        
            if (duplicateOrderExists) {
                throw new Error("Order already exists. Please choose another.");
            }
        }

        if (movie) {
            const duplicateMovieExists = await HeroBanner.findOne({
                movie,
                _id: { $ne: id }
            });
        
            if (duplicateMovieExists) {
                throw new Error("Movie already exists in another Hero Banner");
            }
        }

        const updatedData = {};

        if (movie) updatedData.movie = movie;
        if (order !== undefined) updatedData.order = order;
        if (isActive !== undefined) updatedData.isActive = isActive;

        const updatedHeroBanner = await HeroBanner.findByIdAndUpdate(
            id,
            updatedData,
            {
                new: true
            }
        )

        return updatedHeroBanner;
    } catch (error) {
        throw error
    }
}

const deleteHeroBanners = async (id) => {
    try {
        const heroBannerExists = await HeroBanner.findById(id)
        if(!heroBannerExists){
            throw new Error("Hero Banner doesn't exists")
        }
        const deletedHeroBanner = await HeroBanner.findByIdAndDelete(id)

        return deletedHeroBanner

    } catch (error) {
        throw error
    }

}

module.exports = {
    getHeroBanners,
    getActiveHeroBanners,
    createHeroBanners,
    updateHeroBanners,
    deleteHeroBanners
};