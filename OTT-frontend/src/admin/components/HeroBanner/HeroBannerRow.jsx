import React from "react";

const HeroBannerRow = ({ heroBanner, onEdit, onDelete }) => {

  if (!heroBanner?.movie) {
    return null;
  }

  return (
    <tr className="border-b border-gray-700 hover:bg-[#2b2b2b]">
      <td className="px-4 py-3">
        <img
          src={heroBanner.movie.banner}
          alt={heroBanner.movie.title}
          className="h-16 w-28 rounded object-cover"
        />
      </td>

      <td className="px-4 py-3 font-medium">
        {heroBanner.movie.title}
      </td>

      <td className="px-4 py-3">
        {heroBanner.order}
      </td>

      <td className="px-4 py-3">
        <span
          className={`px-2 py-1 rounded text-sm ${
            heroBanner.isActive
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {heroBanner.isActive ? "Active" : "Inactive"}
        </span>
      </td>

      <td className="px-4 py-3">
        <div className="flex flex-col gap-2">
          <button
            className="px-4 py-1 rounded bg-[#5fa3a1] hover:bg-[#467977] transition-colors duration-300"
            onClick={() => onEdit(heroBanner)}
          >
            Edit
          </button>

          <button
            className="px-4 py-1 rounded bg-red-600 hover:bg-red-700 transition-colors duration-300"
            onClick={() => onDelete(heroBanner)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default HeroBannerRow;