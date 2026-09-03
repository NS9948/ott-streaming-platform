import React, { useEffect, useState } from "react";
import { editCategory } from "../../../services/categories";

const EditCategoryModal = ({ category, onClose,fetchCategories }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  }, [category]);

  if (!category) return null;

  const payload = {
    name
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if(!name.trim){
            alert("Enter category name first")
        }
        await editCategory(category._id, payload)
        fetchCategories()
        setName("")
        onClose()
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#2f2f2f] rounded-xl shadow-xl w-105 p-6">

        <div className="flex items-center justify-between border-b border-gray-700 pb-3">
          <h2 className="text-xl font-bold">
            Edit Category
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

          <div className="flex flex-col gap-2 mt-6">
            <label className="font-semibold">
              {name}
            </label>

            <input
              type="text"
              placeholder="Enter category name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#505050] rounded-md p-2 outline-none border border-transparent focus:border-[#29a7a2] transition-colors"
            />
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
              className="px-4 py-2 rounded-md bg-[#29a7a2] hover:bg-[#238b88] transition-colors duration-300 cursor-pointer"
            >
              Update Category
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditCategoryModal;