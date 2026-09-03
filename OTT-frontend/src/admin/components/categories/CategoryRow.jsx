import React from "react";
import { FiEdit2, FiSlash, FiCheckCircle } from "react-icons/fi";
const CategoryRow = ({ category, onEdit,onStatusChange }) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-[#2f2f2f] transition-colors duration-300">
      <td className="px-4 py-4">
        {category.name}
      </td>

      <td className="px-4 py-4 text-gray-400">
        {category.slug}
      </td>

      <td className="px-4 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            category.isActive
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {category.isActive ? "Active" : "Inactive"}
        </span>
      </td>

      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <button className="cursor-pointer text-blue-400 hover:text-blue-300 transition-colors duration-300" onClick={() => onEdit(category)}>
            <FiEdit2 size={18} />
          </button>

            <button
                className={`cursor-pointer transition-colors duration-300 ${
                    category.isActive
                    ? "text-red-400 hover:text-red-300"
                    : "text-green-400 hover:text-green-300"
                }`}
                onClick={() => onStatusChange(category)}
                >
                {category.isActive ? (
                    <FiSlash size={18} />
                ) : (
                    <FiCheckCircle size={18} />
                )}
            </button>
        </div>
      </td>
    </tr>
  );
};

export default CategoryRow;