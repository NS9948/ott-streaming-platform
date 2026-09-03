import React, { useEffect, useState } from "react";
import { updateHeroBanner } from "../../../services/heroBanner";
import { getMovies } from "../../../services/movieService";

const EditHeroBanner = ({ heroBanner, fetchHeroBanners, onClose }) => {
  const [movies, setMovies] = useState([]);

  const [form, setForm] = useState({
    movie: "",
    order: "",
    isActive: true,
  });

  useEffect(() => {
    fetchMovies();

    if (heroBanner) {
      setForm({
        movie: heroBanner.movie._id,
        order: heroBanner.order,
        isActive: heroBanner.isActive,
      });
    }
  }, [heroBanner]);

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
      await updateHeroBanner(heroBanner._id, {
        movie: form.movie,
        order: Number(form.order),
        isActive: form.isActive,
      });

      await fetchHeroBanners();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="w-full max-w-lg bg-[#1b1b1b] rounded-xl p-6">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h2 className="text-2xl font-semibold">Edit Hero Banner</h2>

          <button
            className="text-2xl cursor-pointer"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

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
            Update Hero Banner
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditHeroBanner;