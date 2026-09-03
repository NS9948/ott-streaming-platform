const {getActiveHeroBanners} = require("../services/admin/heroBannerService");

const getActiveHeroBannerController = async (req, res) => {
    try {
        const heroBanners = await getActiveHeroBanners();

        return res.status(200).json({
            success: true,
            data: heroBanners
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server Failure"
        });
    }
};

module.exports = {
    getActiveHeroBannerController
};