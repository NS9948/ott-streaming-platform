const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require("cors");
const connectDB = require("./config/db")
const authRoutes = require('./routes/authRoutes')
const homeRoutes = require('./routes/homeRoutes')
const watchListRoutes = require('./routes/watchListRoutes')
const likedMovieRoutes = require('./routes/likedMovieRoutes')
const searchRoutes = require('./routes/searchRoutes')
const adminRoutes = require('./routes/adminRoutes')


const app = express()
connectDB();

app.use(cors({
    origin: "http://localhost:5174",
    credentials: true
}));
app.use(express.json())

app.use('/auth',  authRoutes)
app.use('/home', homeRoutes)
app.use('/watchlist', watchListRoutes)
app.use('/liked-movie', likedMovieRoutes)
app.use('/search', searchRoutes)
app.use("/admin", adminRoutes);

app.listen(process.env.PORT,() => {
    console.log(`Server is listening on port ${process.env.PORT}`)
})