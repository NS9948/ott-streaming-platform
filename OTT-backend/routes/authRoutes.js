const { Router } = require("express")
const router = Router()

const { signinController,signupController} = require('../controllers/authController')
const authMiddleware = require("../middlewares/authMiddleware")

router.post('/signup', signupController)

router.post('/signin', signinController)

module.exports = router