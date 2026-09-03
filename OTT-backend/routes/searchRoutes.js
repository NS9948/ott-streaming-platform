const { Router } = require("express")
const { getMoviesController, filterMovieController } = require("../controllers/searchMovieController")
const router = Router()

router.get('/', getMoviesController)

router.get("/filters", filterMovieController);

module.exports = router