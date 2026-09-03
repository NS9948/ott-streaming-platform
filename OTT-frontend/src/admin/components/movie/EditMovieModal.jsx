import React, { useEffect, useState } from "react";
import { updateMovie } from "../../../services/movieService";
import { getCategories } from "../../../services/categories";

const EditMovieModal = ({ movie, fetchMovies, onClose }) => {
  const initialForm = {
    title: "",
    description: "",
    type: "",
    categories: [],
    rentPrice: "",
    banner: null,
    movieLink: "",
  };

  const [form, setForm] = useState(initialForm);

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();

      const activeCategories = data.filter(
        (category) => category.isActive
      );

      setCategories(activeCategories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (movie) {
      setForm({
        title: movie.title,
        description: movie.description,
        type: movie.type,

        categories: movie.categories?.map((category) =>
          typeof category === "object"
            ? category._id
            : category
        ) || [],

        rentPrice: movie.rentPrice,
        banner: null,
        movieLink: movie.movieLink,
      });
    }
  }, [movie]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCategoryChange = (categoryId) => {
    setForm((prev) => {
      const alreadySelected =
        prev.categories.includes(categoryId);

      return {
        ...prev,

        categories: alreadySelected
          ? prev.categories.filter(
              (id) => id !== categoryId
            )
          : [...prev.categories, categoryId],
      };
    });
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({
      ...prev,
      banner: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("type", form.type);
      formData.append("rentPrice", form.rentPrice);
      formData.append("movieLink", form.movieLink);

      form.categories.forEach((categoryId) => {
        formData.append("categories", categoryId);
      });

      if (form.banner) {
        formData.append("banner", form.banner);
      }

      await updateMovie(movie._id, formData);

      await fetchMovies();

      onClose();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-[#1b1b1b] rounded-xl p-6">

        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h2 className="text-2xl font-semibold text-white">
            Edit Movie
          </h2>

          <button
            className="text-white text-2xl cursor-pointer"
            onClick={() => onClose()}
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="m-3 bg-[#2f2f2f] flex p-3 rounded-[10px] gap-3 flex-col w-fit"
        >

          <div className="flex items-center justify-between gap-3 rounded-[5px] p-3">
            <label className="w-32 font-semibold">
              Title:
            </label>

            <input
              className="flex-1 p-1 bg-[#505050] rounded-[5px]"
              name="title"
              value={form.title}
              onChange={handleChange}
              type="text"
              placeholder="Enter title..."
            />
          </div>

          <div className="flex items-center justify-between gap-3 rounded-[5px] p-3">
            <label className="w-32 font-semibold">
              Description:
            </label>

            <textarea
              className="flex-1 p-1 bg-[#505050] rounded-[5px]"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={6}
              placeholder="Enter description..."
            />
          </div>

          <div className="flex items-center justify-between gap-3 rounded-[5px] p-3">
            <label className="w-32 font-semibold">
              Type:
            </label>

            <select
              className="flex-1 p-1 bg-[#505050] rounded-[5px]"
              name="type"
              value={form.type}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>

          {/* CHANGE 7: Category selector */}
          <div className="flex items-start justify-between gap-3 rounded-[5px] p-3">
            <label className="w-32 font-semibold">
              Categories:
            </label>

            <div className="flex-1 flex flex-wrap gap-3">
              {categories.map((category) => (
                <label
                  key={category._id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={form.categories.includes(category._id)}
                    onChange={() =>
                      handleCategoryChange(category._id)
                    }
                  />

                  <span>{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-[5px] p-3">
            <label className="w-32 font-semibold">
              Rent Price:
            </label>

            <input
              className="flex-1 p-1 bg-[#505050] rounded-[5px]"
              name="rentPrice"
              value={form.rentPrice}
              onChange={handleChange}
              type="number"
              min="0"
              placeholder="Enter rent price..."
            />
          </div>

          <div className="flex items-center justify-between gap-3 rounded-[5px] p-3">
            <label className="w-32 font-semibold">
              Banner:
            </label>

            <input
              className="flex-1 p-1 bg-[#505050] rounded-[5px]"
              name="banner"
              onChange={handleFileChange}
              type="file"
              accept="image/*"
            />
          </div>

          <div className="flex items-center justify-between gap-3 rounded-[5px] p-3">
            <label className="w-32 font-semibold">
              Movie Link:
            </label>

            <input
              className="flex-1 p-1 bg-[#505050] rounded-[5px] outline-0"
              name="movieLink"
              value={form.movieLink}
              onChange={handleChange}
              type="url"
              placeholder="Enter url..."
            />
          </div>

          <button
            type="submit"
            className="font-bold bg-[#29a7a2] hover:bg-[#238b88] transition-colors duration-300 rounded-[5px] cursor-pointer py-2"
          >
            Update Movie
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditMovieModal;