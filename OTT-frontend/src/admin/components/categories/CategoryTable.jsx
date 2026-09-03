import React from "react";
import CategoryRow from "./CategoryRow";

const CategoryTable = ({categories,onEdit,onStatusChange}) => {

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="min-w-full">
        <thead className="bg-[#2f2f2f] text-gray-300">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Slug</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <CategoryRow
                key={category._id}
                category={category}
                onEdit={onEdit}
                onStatusChange={onStatusChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;