const Subscription = require("../models/subscription");


const requireSubscription = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const subscription = await Subscription.findOne({
            user: userId,
            expiryDate: { $gt: new Date() }
        });

        if (!subscription) {
            return res.status(403).json({
                success: false,
                message: "Active subscription required"
            });
        }

        req.subscription = subscription;

        next();

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server Failure"
        });
    }
};

module.exports = requireSubscription;