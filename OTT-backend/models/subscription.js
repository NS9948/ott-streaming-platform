const { Schema, model } = require("mongoose");

const subscriptionSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    plan: {
        type: String,
        enum: ["Free", "Basic", "Premium"],
        required: true
    },

    status: {
        type: String,
        enum: ["active", "expired", "cancelled"],
        default: "active"
    },

    startDate: {
        type: Date,
        default: Date.now
    },

    expiryDate: {
        type: Date,
        required: true
    }

}, { timestamps: true });

const Subscription = model("Subscription", subscriptionSchema);

module.exports = Subscription;