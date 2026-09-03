const { Router } = require("express");

const dashboardController = require("../controllers/admin/dashboardController");
const moviesController = require("../controllers/admin/moviesController");

const createMovieController = require("../controllers/uploadController");
const updateMovieController = require("../controllers/updateMovieController");
const deleteMovieController = require("../controllers/deleteMovieController");

const upload = require("../config/multer");

const authMiddleware = require("../middlewares/authMiddleware");
const adminCheck = require("../middlewares/adminAuth");
const {getHeroBannerController,createHeroBannerController, updateHeroBannerController, deleteHeroBannerController} = require("../controllers/admin/heroBannerController");
const { getCategoriesController, getCategoryByIdController, createCategoryController, updateCategoryController, deleteCategoryController } = require("../controllers/admin/categories");

const router = Router();

router.use(authMiddleware);
router.use(adminCheck);

router.get("/dashboard", dashboardController);

router.get("/movies", moviesController);

router.get("/hero-banner", getHeroBannerController)

router.post("/hero-banner", createHeroBannerController)

router.put("/hero-banner/:id",updateHeroBannerController)

router.delete("/hero-banner/:id",deleteHeroBannerController)

router.get("/categories", getCategoriesController)
router.get("/category/:id", getCategoryByIdController)
router.post("/category", createCategoryController)
router.put("/category/:id", updateCategoryController)
router.delete("/category/:id", deleteCategoryController)

router.post(
    "/movie",
    upload.single("banner"),
    createMovieController
);

router.put(
    "/movie/:id",
    upload.single("banner"),
    updateMovieController
);

router.delete(
    "/movie/:id",
    deleteMovieController
);

module.exports = router;