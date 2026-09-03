const { Router } = require("express")
const router = Router()
const authMiddleware = require("../middlewares/authMiddleware")
const {likeMovieController,getLikedMoviesController,removeLikedMovieController} = require('../controllers/likedMovieController')

router.post('/:movieId',authMiddleware, likeMovieController )

router.get('/',authMiddleware, getLikedMoviesController)

router.delete('/:movieId',authMiddleware, removeLikedMovieController)

module.exports = router
