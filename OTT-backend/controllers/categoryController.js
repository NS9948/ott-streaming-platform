const { getActiveCategories } = require("../services/categoryService");

const getActiveCategoriesController = async (req, res) => {
    try {
        const categories = await getActiveCategories();

        return res.status(200).json({
            success: true,
            data: categories
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
    getActiveCategoriesController
};