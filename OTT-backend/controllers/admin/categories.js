const { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory } = require("../../services/admin/categories")

const createCategoryController = async (req,res) => {
    try {
        const { name } = req.body
        if(!name){
            return res.status(400).json({
                message: "Category required"
            })
        }

        const data = await createCategory(req.body)
        
        return res.status(200).json({
            success: true,
            message: "Category created successfully",
            data
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }    
}

const getCategoriesController = async (req,res) => {
    try {
        const data = await getCategories()

        return res.status(200).json({
            success: true,
            data
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getCategoryByIdController =  async (req,res) => {
    try {
        const {id} = req.params
        const data = await getCategoryById(id);

        return res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const updateCategoryController = async (req,res) => {
    try {
        const {id} = req.params

        const data = await updateCategory(id,req.body)

        return res.status(200).json({
            success: true,
            message: "Category Updated Successfully",
            data
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deleteCategoryController = async (req,res) => {
    try {

        const {id} = req.params

        const data = await deleteCategory(id)
        
        return res.status(200).json({
            success: true,
            message: "Category Disabled Successfully",
            data
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createCategoryController,
    getCategoriesController,
    getCategoryByIdController,
    updateCategoryController,
    deleteCategoryController
}