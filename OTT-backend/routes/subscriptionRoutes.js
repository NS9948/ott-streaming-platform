const { Router } = require("express");
const { subscriptionController, getSubscriptionController } = require("../controllers/subscriptionController");

const router = Router();

router.post("/", subscriptionController);

router.get("/", getSubscriptionController);

module.exports = router;