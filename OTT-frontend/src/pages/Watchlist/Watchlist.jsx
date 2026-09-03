import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { getWatchlist } from '../../services/watchlistService'
import MovieCard from '../../components/movie/MovieCard'

const Watchlist = () => {
  const [watchListMovies, setWatchListMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getWatchlist()

        console.log("RES:", res)

        const watchlist = res?.data || []

        setWatchListMovies(watchlist)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  if (loading) {
    return (
      <h1 className='flex items-center justify-center w-full h-screen font-bold text-2xl text-white'>
        Loading...
      </h1>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#030404] text-white">
      <Navbar />

      <main className="flex-1 pt-20 px-6 md:px-10">
        <h1 className="text-3xl font-bold mb-2">
          My Watchlist...
        </h1>

        {watchListMovies.length === 0 && (
          <p className='text-gray-400 mt-8'>
            No movies in your watchlist
          </p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-6">
          {watchListMovies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onWatchlistRemove={(id) => {
                setWatchListMovies(prev =>
                  prev.filter(movie => movie._id !== id)
                )
              }}
            />
          ))}
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Watchlist