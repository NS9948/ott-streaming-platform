const getDashboardData = require("../../services/admin/dashboardService");

const dashboardController = async (req,res) => {
    try {
        const dashboardData = await getDashboardData()

        return res.status(200).json({
            "success": true,
            "data": dashboardData
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success": false,
            "message": "Internal Server Error"
        })
    }
    
}

module.exports = dashboardController