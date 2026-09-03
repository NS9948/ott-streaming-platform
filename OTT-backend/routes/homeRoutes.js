const { Router } = require("express");
const {getActiveHeroBannerController} = require("../controllers/heroBannerController");
const {getActiveCategoriesController} = require("../controllers/categoryController");

const router = Router();

router.get('/', (req, res) => {
    return res.send("Homepage");
});

router.get('/hero-banner', getActiveHeroBannerController);

router.get('/categories', getActiveCategoriesController);

router.get('/:id', (req, res) => {
    return res.send(`${req.user._id}`);
});

module.exports = router;