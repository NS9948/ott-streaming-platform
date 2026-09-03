import React, { useState } from 'react'
import { FaCircle } from "react-icons/fa";
import { addToWatchlist, removeFromWatchlist } from '../../services/watchlistService';
import ActionButton from "./ActionButton"

const MovieOverlay = ({
    movie,
    isHovered,
    isInWatchlist,
    toggleWatchlist,
    isLiked,
    toggleLike
}) => {
    return (
        <div
            className={`absolute left-0 right-0 top-full bg-[#252D38] p-2 flex flex-col gap-1.5 text-white z-50 transition-all duration-300 ${
                isHovered
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
            }`}
        >
            <p className='font-bold'>{movie.title}</p>

            <div className='flex items-center gap-1'>
                <div className="h-4 w-4 bg-[#45e6e1] rounded-full flex items-center justify-center text-[10px]">
                    +
                </div>

                <p className='text-[12px] font-bold'>
                    Available with Premium
                </p>
            </div>

            <div className="flex items-center gap-2 text-[10px]">
                {movie.type}

                {movie.categories?.length > 0 && (
                    <>
                        <FaCircle className="text-[6px] text-[#3DEEE9]" />
                        <span>
                            {movie.categories
                                .map((category) => category.name)
                                .join(", ")}
                        </span>
                    </>
                )}
            </div>

            <div className='flex gap-1 items-center'>
                <div className='h-4 w-0.5 bg-[#3DEEE9]'></div>
                <p className='truncate text-[13px] font-bold'>
                    {movie.description}
                </p>
            </div>

            <div className='flex gap-2'>
                <ActionButton 
                    title="My List"
                    onClick={toggleWatchlist}
                    isActive={isInWatchlist}
                />

                <ActionButton
                    title="Like"
                    onClick={toggleLike}
                    isActive={isLiked}
                />

                <ActionButton title="Share" />
            </div>
        </div>
    )
}

export default MovieOverlay