const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    banner: {
        type: String
    },
    type: {
        type: String,
        enum: ["movie", "series"],
        required: true
    },
    rentPrice: {
        type: Number,
        required: true
    },
    movieLink: {
        type: String,
        required: true
    },
    categories:[{
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true

    }]
}, { timestamps: true })

const Movie = model("movie", movieSchema)

module.exports = Movie