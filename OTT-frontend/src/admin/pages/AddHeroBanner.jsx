import React, { useEffect, useState } from 'react'
import { getMovies } from '../../services/movieService';
import { createHeroBanner } from '../../services/heroBanner';
import { useNavigate } from 'react-router-dom';

const AddHeroBanner = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([]);

  const [form, setForm] = useState({
    movie: "",
    order: "",
    isActive: true,
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "isActive" ? value === "true" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        movie: form.movie,
        order: Number(form.order),
        isActive: form.isActive,
      };
      
      console.log("Payload:", payload);
      
      await createHeroBanner(payload);

      navigate("/admin/hero")
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div>
      <h1 className='text-2xl font-bold border-b border-[#535353] p-3'>ADD HERO BANNER</h1>
      <div>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">

        <div>
          <label className="block mb-2 font-semibold">
            Movie
          </label>

          <select
            name="movie"
            value={form.movie}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#505050] outline-0"
          >
            <option value="">
                Select Movie
            </option>
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Order
          </label>

          <input
            type="number"
            min="1"
            name="order"
            value={form.order}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#505050] outline-0"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Status
          </label>

          <select
            name="isActive"
            value={String(form.isActive)}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#505050] outline-0"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-[#29a7a2] hover:bg-[#238b88] transition-colors duration-300 rounded py-2 font-semibold"
        >
          ADD HERO BANNER
        </button>
        </form>
      </div>

    </div>
  )
}

export default AddHeroBanner
