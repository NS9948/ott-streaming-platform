import React from "react";

const MovieRow = ({ movie, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-[#2b2b2b]">
      <td className="px-4 py-3">
        <img
          src={movie.banner}
          alt={movie.title}
          className="h-16 w-28 rounded object-cover"
        />
      </td>

      <td className="px-4 py-3 font-medium">
        {movie.title}
      </td>

      <td className="px-4 py-3">
        {movie.type}
      </td>

      <td className="px-4 py-3">
          {movie.categories.map(category => category.name).join(", ")}
      </td>

      <td className="px-4 py-3 max-w-sm truncate">
        {movie.description}
      </td>

      <td className="px-4 py-3">
        {new Date(movie.createdAt).toLocaleDateString()}
      </td>
        <td className="flex flex-col gap-2 px-4 py-3">
            <button className='flex items-center gap-1  px-4 py-1 rounded-[5px] cursor-pointer bg-[#5fa3a1] hover:bg-[#467977] transition-colors duration-300 w-20' onClick={() => onEdit(movie)}>Edit</button>
            <button className='flex items-center gap-1  px-4 py-1 rounded-[5px] cursor-pointer bg-[#5fa3a1] hover:bg-[#467977] transition-colors duration-300 w-20' onClick={() => onDelete(movie)}>Delete</button>
        </td>
    </tr>
  );
};

export default MovieRow;