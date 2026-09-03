import React from 'react'

const LatestMovieCard = ({movie}) => {
  return (
    <div className='flex w-full items-center rounded-lg bg-[#494a4a] border-gray-700 gap-6 p-3 border'>
        <div><img src={movie.banner} alt={movie.title} className='h-20 object-cover rounded'/></div>
        <div>
            <p className="font-semibold">{movie.title}</p>
            <p className="text-[7px] text-gray-400">
                {movie._id.slice(0, 8)}...
            </p>
        </div>
    </div>
  )
}

export default LatestMovieCard
