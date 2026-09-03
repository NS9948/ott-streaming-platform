const { Schema, model } = require("mongoose")

const heroSchema = new Schema({
    movie:{
        type: Schema.Types.ObjectId,
        ref: "movie",
        required: true
    },
    order:{
        type: Number,
        required: true
    },
    isActive:{
        type: Boolean,
        default: true
    }
},{
    timestamps: true
})

const HeroBanner = model('heroBanner', heroSchema)

module.exports = HeroBanner