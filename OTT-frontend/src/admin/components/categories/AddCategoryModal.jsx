import React, { useState } from "react";
import { createCategory } from "../../../services/categories";

const AddCategoryModal = ({ isOpen, onClose,fetchCategories }) => {
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
        if(!name.trim()){
            alert("Category is required!!")
            return
        }
        const payload = {
            name
        }
        const data = await createCategory(payload)
        fetchCategories()
        setName("");
        onClose();
    } catch (error) {
        console.error(error);

        alert(
            error.response?.data?.message ||
            "Failed to create category"
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#2f2f2f] rounded-xl shadow-xl w-105 p-6">
        <h2 className="text-xl font-bold border-b border-gray-700 pb-3">
          Add Category
        </h2>

        <div className="flex flex-col gap-2 mt-6">
          <label className="font-semibold">Category Name</label>

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
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500 transition-colors duration-300 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md bg-[#29a7a2] hover:bg-[#238b88] transition-colors duration-300 cursor-pointer"
          >
            Create Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;