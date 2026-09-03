import React from 'react'
import { deleteMovie } from '../../../services/movieService'

const DeleteMovieModal = ({movie,onClose,fetchMovies}) => {
    const handleDelete = async () => {
        try {
            await deleteMovie(movie._id);
            await fetchMovies();
            onClose();
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
        <div className="w-full max-w-75 bg-[#1b1b1b] rounded-xl p-6">
            <div className="flex justify-center items-center border-b border-gray-700 pb-4">
            <p className="text-center text-gray-300 mt-5">
                Are you sure you want to delete
                <span className="font-semibold text-white">
                    {" "}{movie.title}
                </span>
                ?
            </p>
            </div>
            <div className='mt-3 flex justify-center items-center gap-10'>
                <button className='bg-[#1d61ce] p-2 rounded-2xl font-bold border cursor-pointer hover:bg-[#1d61cea9] transition-colors duration-300' onClick={onClose}>CANCEL</button>
                <button className='bg-[#f93535] p-2 rounded-2xl font-bold border cursor-pointer hover:bg-[#f9353594] transition-colors duration-300' onClick={handleDelete}>CONFIRM</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteMovieModal
