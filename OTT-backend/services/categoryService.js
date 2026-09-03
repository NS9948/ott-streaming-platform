const Category = require("../models/categories");

const getActiveCategories = async () => {
    try {
        const categories = await Category.find({
            isActive: true
        }).sort({ createdAt: 1 });

        return categories;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getActiveCategories
};