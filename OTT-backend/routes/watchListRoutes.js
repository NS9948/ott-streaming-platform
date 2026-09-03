const { Router } = require("express")
const { watchListController,getWatchListController,deleteWatchListController } = require("../controllers/watchListController")
const authMiddleware = require("../middlewares/authMiddleware")
const router = Router()

router.post('/:movieId',authMiddleware, watchListController)

router.get('/',authMiddleware, getWatchListController)

router.delete('/:movieId',authMiddleware, deleteWatchListController)

module.exports = router
