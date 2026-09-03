const Subscription = require("../models/subscription");

const PLAN_DURATION = {
    Free: 7,
    Basic: 30,
    Premium: 365
};

const subscriptionController = async (req, res) => {
    try {
        const { plan } = req.body;

        const allowedPlans = Object.keys(PLAN_DURATION);

        if (!plan) {
            return res.status(400).json({
                success: false,
                message: "No subscription plan found!!"
            });
        }

        if (!allowedPlans.includes(plan)) {
            return res.status(400).json({
                success: false,
                message: "No such plan exists!!"
            });
        }

        const user = req.user.id;

        const existingSubscription = await Subscription.findOne({
            user
        });

        const currentDate = new Date();

        let startDate;

        if (
            existingSubscription &&
            existingSubscription.expiryDate > currentDate
        ) {
            startDate = existingSubscription.expiryDate;
        } else {
            startDate = currentDate;
        }

        const expiryDate = new Date(startDate);

        expiryDate.setDate(
            expiryDate.getDate() + PLAN_DURATION[plan]
        );

        let subscription;

        if (!existingSubscription) {
            subscription = await Subscription.create({
                user,
                plan,
                startDate,
                expiryDate
            });
        } else {
            subscription = await Subscription.findByIdAndUpdate(
                existingSubscription._id,
                {
                    plan,
                    startDate,
                    expiryDate
                },
                {
                    new: true,
                    runValidators: true
                }
            );
        }

        return res.status(200).json({
            success: true,
            message: "Subscription processed successfully!!",
            subscription
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server Failure!!"
        });
    }
};

const getSubscriptionController = async (req, res) => {
    try {
        const user = req.user.id;

        const subscription = await Subscription.findOne({ user });

        if (!subscription) {
            return res.status(200).json({
                success: true,
                subscription: null
            });
        }

        return res.status(200).json({
            success: true,
            subscription
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server Failure!!"
        });
    }
};

module.exports = {
    subscriptionController,
    getSubscriptionController
};