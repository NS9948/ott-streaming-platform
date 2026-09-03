import React from "react";
import { editCategory } from "../../../services/categories";

const CategoryStatusModal = ({
  category,
  onClose,
  fetchCategories
}) => {

  if (!category) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await editCategory(category._id, {
        isActive: !category.isActive
      });

      await fetchCategories();

      onClose();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#2f2f2f] rounded-xl shadow-xl w-105 p-6">

        <div className="flex items-center justify-between border-b border-gray-700 pb-3">

          <h2 className="text-xl font-bold">
            {category.isActive
              ? "Disable Category"
              : "Enable Category"
            }
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300"
          >
            ✕
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="mt-6">

            <p className="text-gray-300">
              Are you sure you want to{" "}

              <span className="font-semibold">
                {category.isActive ? "disable" : "enable"}
              </span>

              {" "}

              <span className="font-bold text-white">
                {category.name}
              </span>

              ?
            </p>

          </div>

          <div className="flex justify-end gap-3 mt-8">

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500 transition-colors duration-300 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className={`px-4 py-2 rounded-md transition-colors duration-300 cursor-pointer ${
                category.isActive
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {category.isActive
                ? "Disable Category"
                : "Enable Category"
              }
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default CategoryStatusModal;