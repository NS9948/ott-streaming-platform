import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MovieOverlay from "./MovieOverlay";
import {
    addToWatchlist,
    removeFromWatchlist,
    getWatchlist
} from "../../services/watchlistService";
import {
    likeMovie,
    removeLikedMovie,
    getLikedMovies
} from "../../services/likeMovies";

const MovieCard = ({
    movie,
    onRemove,
    onLikeRemove,
    onWatchlistRemove
}) => {
    const navigate = useNavigate();

    const [isHovered, setIsHovered] = useState(false);
    const [isInWatchlist, setIsInWatchlist] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const toggleWatchlist = async () => {
        try {
            if (isInWatchlist) {
                await removeFromWatchlist(movie._id);

                setIsInWatchlist(false);

                onWatchlistRemove && onWatchlistRemove(movie._id);
            } else {
                await addToWatchlist(movie._id);

                setIsInWatchlist(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchWatchlist = async () => {
            try {
                const res = await getWatchlist();

                const watchlist = res.data;

                const exists = watchlist.some(
                    (item) => item._id === movie._id
                );

                setIsInWatchlist(exists);

            } catch (error) {
                console.error(error);
            }
        };

        fetchWatchlist();
    }, [movie._id]);

    const toggleLike = async () => {
        try {
            if (isLiked) {
                await removeLikedMovie(movie._id);

                setIsLiked(false);

                onLikeRemove && onLikeRemove(movie._id);
            } else {
                await likeMovie(movie._id);

                setIsLiked(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchLikedMovies = async () => {
            try {
                const res = await getLikedMovies();

                const likedMovies = res.likeCollection;

                const exists = likedMovies.some(
                    (item) => item._id === movie._id
                );

                setIsLiked(exists);

            } catch (error) {
                console.error(error);
            }
        };

        fetchLikedMovies();
    }, [movie._id]);

    return (
        <div
            className={`rounded-lg overflow-visible w-70 cursor-pointer transition-all duration-300 m-3 ${
                isHovered ? "scale-105 z-10" : "scale-100"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate(`/movie/${movie._id}`)}
        >
            <div className="relative overflow-visible">
                <img
                    src={movie.banner}
                    alt={movie.title}
                    className="w-full h-45 object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-70"></div>

                <div className="absolute bottom-3 right-3">
                    <div className="h-10 w-10 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-[#67aeac] transition">
                        <FaPlay className="text-white text-xs ml-0.5" />
                    </div>
                </div>
            </div>

            {isHovered && (
                <MovieOverlay
                    movie={movie}
                    isHovered={isHovered}
                    isInWatchlist={isInWatchlist}
                    toggleWatchlist={toggleWatchlist}
                    isLiked={isLiked}
                    toggleLike={toggleLike}
                />
            )}
        </div>
    );
};

export default MovieCard;