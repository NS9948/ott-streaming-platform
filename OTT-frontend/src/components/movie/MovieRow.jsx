import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, movie, isLast, isSidebarOpen }) => {
    const [startIndex, setStartIndex] = useState(0);

    const moviesToShow = 5;

    const scrollLeft = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const scrollRight = () => {
        if (startIndex + moviesToShow < movie.length) {
            setStartIndex((prev) => prev + 1);
        }
    };

    const visibleMovies = movie.slice(
        startIndex,
        startIndex + moviesToShow
    );

    return (
        <div
            className={`pl-10 pt-10 w-full h-67.5 overflow-visible ${
                isLast ? "mb-8" : "mb-0"
            }`}
        >
            <h2 className="font-bold text-xl mb-6">
                {title}
            </h2>

            <div className="relative h-45">

                <button
                    onClick={scrollLeft}
                    className="cursor-pointer z-100 absolute left-2 top-0 bottom-0 my-auto h-10 w-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-black text-xl shadow-md hover:bg-white transition"
                >
                    ‹
                </button>

                <button
                    onClick={scrollRight}
                    className="cursor-pointer z-100 absolute right-2 top-0 bottom-0 my-auto h-10 w-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-black text-xl shadow-md hover:bg-white transition"
                >
                    ›
                </button>

                <div className="flex gap-4 w-full items-start">
                    {visibleMovies.map((movie) => (
                        <MovieCard
                            key={movie._id}
                            movie={movie}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MovieRow;