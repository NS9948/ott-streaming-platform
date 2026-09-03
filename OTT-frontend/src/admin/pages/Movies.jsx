import React from 'react'
import { getMovies } from '../../services/movieService'
import { useState,useEffect } from 'react'
import MovieTable from '../components/movie/MovieTable'
import MovieToolbar from '../components/movie/MovieToolbar'
import { useNavigate } from 'react-router-dom'
import EditMovieModal from '../components/movie/EditMovieModal'
import DeleteMovieModal from '../components/movie/DeleteMovieModal'


const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const fetchMovies = async() => {
    try {
      setLoading(true)
      const data = await getMovies()
      setMovies(data)
      setError("")
    } catch (error) {
      setError("Failed to Fetch Movies.")
    } finally {
      setLoading(false)
    }
  }  

  useEffect(() => {
    fetchMovies()
  },[])

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  const handleAddMovie = () => {
    navigate("/admin/movies/add");
  };

  const handleEditMovie = (movie) => {
    setSelectedMovie(movie);
    setIsEditModalOpen(true);
  };

  const handleDeleteMovie = (movie) => {
    setSelectedMovie(movie);
    setIsDeleteModalOpen(true);
  }       

  return (
    <div className="p-6">
      <MovieToolbar search="" onSearchChange={() => {}} onAddMovie={handleAddMovie}/>
      <h1 className="text-2xl font-semibold mb-6">
        Movies
      </h1>

      <MovieTable movies={movies} handleEditMovie={handleEditMovie} handleDeleteMovie={handleDeleteMovie}/>
      {isEditModalOpen && <EditMovieModal movie={selectedMovie} fetchMovies={fetchMovies} onClose={() => setIsEditModalOpen(false)}/>}
      {isDeleteModalOpen && <DeleteMovieModal movie={selectedMovie} fetchMovies={fetchMovies} onClose={() => setIsDeleteModalOpen(false)}/>}
      
    </div>
  )
}

export default Movies
