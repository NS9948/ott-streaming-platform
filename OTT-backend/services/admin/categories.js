const slugify = require("slugify")
const Category = require("../../models/categories")

const createCategory = async (payload) => {
    const { name } = payload;
    const category = await Category.findOne({name})
    if(category) {
        throw new Error("Category already exists!!")
    }

    const slug = slugify(name, {
        lower: true,
        strict: true
    })

    const data = await Category.create({
        name,
        slug
    })

    return data
}

const getCategories = async () => {
    const categories = await Category.find({}).sort({name: 1})
    return categories
}

const getCategoryById = async (id) => {
    const category = await Category.findById(id)
    if(!category) throw new Error("Category does not exist")

    return category
}

const updateCategory = async (id, payload) => {
    const category = await Category.findById(id);

    if (!category) {
        throw new Error("Category does not exist!!");
    }

    const updatedData = {};

    if (payload.name) {
        const existingCategory = await Category.findOne({
            name: payload.name,
            _id: { $ne: id }
        });

        if (existingCategory) {
            throw new Error("Category already exists!!");
        }

        updatedData.name = payload.name;

        updatedData.slug = slugify(payload.name, {
            lower: true,
            strict: true
        });
    }

    if (payload.isActive !== undefined) {
        updatedData.isActive = payload.isActive;
    }

    const data = await Category.findByIdAndUpdate(
        id,
        updatedData,
        {
            new: true,
            runValidators: true
        }
    );

    return data;
};

const deleteCategory = async (id) => {
    const category = await Category.findById(id)
    if(!category) throw new Error("Category does not exist!!")

    const data = await Category.findByIdAndUpdate(id,{
        isActive: false
    },{new: true})

    return data
}

module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}