const { Schema,model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    phone:{
        type: String,
    },
    dob:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    watchlist:[
        {
            type: Schema.Types.ObjectId,
            ref: "movie"
        }
    ],
    likedMovies:[
        {
            type: Schema.Types.ObjectId,
            ref: "movie"
        }
    ],
    subscription:{
            type: Schema.Types.ObjectId,
            ref: "Subscription"
    }
    
},{timestamps: true})

const User = model("User", userSchema)

module.exports = User;