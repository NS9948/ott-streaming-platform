import React from "react";
import MovieRow from "./MovieRow";

const MovieTable = ({ movies, handleEditMovie, handleDeleteMovie }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="min-w-full">
      <thead className="bg-[#2f2f2f] text-gray-300">
          <tr>
            <th className="px-4 py-3 text-left">Banner</th>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Type</th>
            <th className="px-4 py-3 text-left">Categories</th>
            <th className="px-4 py-3 text-left">Description</th>
            <th className="px-4 py-3 text-left">Created</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            <MovieRow key={movie._id} movie={movie} onEdit={handleEditMovie} onDelete={handleDeleteMovie}/>
          ))}
            
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;