import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getUserMovies } from '../../services/movieService';

const MoviePlayer = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserMovies();

            const selected = data.movies.find(m => m._id === id);

            setMovie(selected);
            setLoading(false);
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <h1 className='flex items-center justify-center h-screen font-bold text-2xl'>
                Loading...
            </h1>
        );
    }

    if (!movie) {
        return (
            <h1 className='flex items-center justify-center h-screen font-bold text-2xl'>
                No movie found
            </h1>
        );
    }

    const getEmbedUrl = (url) => {
        if (url.includes("youtube.com/watch")) {
            const videoId = url.split("v=")[1].split("&")[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
        }
        return url;
    };

    return (
        <div className="bg-[#0F1113] text-white min-h-screen">
    
            <div className="p-4">
                <button 
                    onClick={() => window.history.back()}
                    className="text-gray-300 hover:text-white transition"
                >
                    ← Back
                </button>
            </div>
    
            <div className="max-w-5xl mx-auto px-4">
    
                <div className="rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                        src={getEmbedUrl(movie.movieLink)}
                        className="w-full h-125"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
    
                <div className="mt-6">
                    <h1 className="text-3xl font-bold">
                        {movie.title}
                    </h1>
    
                    <p className="text-gray-400 mt-3 leading-relaxed max-w-3xl">
                        {movie.description}
                    </p>
                </div>
    
            </div>
        </div>
    );
};

export default MoviePlayer;