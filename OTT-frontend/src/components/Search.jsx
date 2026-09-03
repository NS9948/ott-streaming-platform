import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Filters from './Filters';
import { getFilterServie, searchMovies } from '../services/movieService';
import MovieCard from './movie/MovieCard'

const Search = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([])
    
    const [types, setTypes] = useState([])
    const handleFilterOpen = () => {
        setIsFilterOpen(prev => !prev)
    }

    const fetchMovies = async () => {
        try {
            setLoading(true)
            const data = await searchMovies({
                search,
                category: selectedCategory,
                type: selectedType
            })

            setMovies(data.movies)
        } catch (error) {
            console.error(error)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    },[])

    const fetchFilters = async () => {
        try {
            const data = await getFilterServie()

            setCategories(data.categories)
            setTypes(data.types)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchFilters()
    },[])

    const handleApplyFilters = () => {
        fetchMovies();
        setIsFilterOpen(false);
    };

  return (
    <div className='w-screen min-h-screen h-auto bg-black p-10 text-white relative'>
        <section className='flex items-center justify-between'>
            <div>
                <HiOutlineArrowLeft size={24}/>
            </div>
            <div className='border-[0.5px] border-[#727171] flex items-center justify-center p-3 rounded-full w-112.5 gap-6 px-6'>
                <div className='cursor-pointer'>
                    <FiSearch onClick={fetchMovies} className="text-xl text-white cursor-pointer hover:text-[#3AE7E2] transition-colors"/>
                </div>
                
                <input
                    type="text" 
                    className='flex-1 text-white outline-none' 
                    placeholder='Search by Series, Shows, Movies, etc.' 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            fetchMovies();
                        }
                }}/>
                <div  className='hover:bg-[#7b7a7a] rounded-[5px] p-1 cursor-pointer' onClick={handleFilterOpen} >
                    <HiOutlineAdjustmentsHorizontal size={20}/>
                    <div onClick={(e) => {
                        e.stopPropagation()
                    }}>
                        {isFilterOpen ? <Filters
                            setIsFilterOpen={setIsFilterOpen}
                            categories={categories}
                            types={types}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            selectedType={selectedType}
                            setSelectedType={setSelectedType}
                            handleApplyFilters={handleApplyFilters}
                        /> : ""}
                    </div>
                </div>
            </div>
            <div></div>
        </section>
        <section className='mt-10'>
            <div className='grid grid-cols-4 hover:z-10'>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie._id}
                        movie={movie}
                    />
                ))}
            </div>
        </section>
    </div>
  )
}

export default Search
