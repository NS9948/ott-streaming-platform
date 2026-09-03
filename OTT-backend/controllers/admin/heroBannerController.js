const { getHeroBanners, createHeroBanners, updateHeroBanners, deleteHeroBanners } = require("../../services/admin/heroBannerService")

const getHeroBannerController = async (req,res) => {
    try {
        const heroBanners = await getHeroBanners();

        return res.status(200).json({
            success: true,
            data: heroBanners
        })
        
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            success: false,
            message: "Server Failure"
        })
    }
}
 
const createHeroBannerController = async (req,res) => {
    try {
        const {movie ,order} = req.body
        if(!movie){
            return res.status(400).json({
                message: "Movie doesn't exist"
            })
        }
        if (order === undefined){
            return res.status(400).json({
                message: "Order doesn't exist"
            })
        }

        const heroBanner = await createHeroBanners(movie,order)

        return res.status(201).json({
            success: true,
            message: "Hero Banner created succesfully",
            heroBanner
        })
    } catch (error) {
        console.error("CREATE HERO BANNER ERROR:", error);
    
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const updateHeroBannerController = async (req,res) => {
    try {
        const { id } = req.params
        const {movie,order,isActive} = req.body

        if(!movie){
            return res.status(400).json({
                message: "Movie not provided"
            })
        }
        if(order === undefined){
            return res.status(400).json({
                message: "Order not provided"
            })
        }

        const movieUpdated = await updateHeroBanners(id,movie,order,isActive)

        return res.status(200).json({
            success: true,
            message: "Hero Banner updated successfully",
            movieUpdated
        })
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Server Failure"
        })
    }
}

const deleteHeroBannerController = async (req,res) => {
    try {
        const {id} = req.params

        const deletedHeroBanner = await deleteHeroBanners(id)

        return res.status(200).json({
            success: true,
            message: "Hero Banner deleted Successfully",
            deletedHeroBanner
        })
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Server Failure"
        })
    }
}

module.exports = {
    getHeroBannerController,
    createHeroBannerController,
    deleteHeroBannerController,
    updateHeroBannerController
}