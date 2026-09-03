import React, { useEffect, useState } from "react";
import CategoryToolbar from '../components/categories/CategoryToolbar'
import CategoryTable from '../components/categories/CategoryTable'
import AddCategoryModal from '../components/categories/AddCategoryModal'
import { getCategories } from "../../services/categories";
import EditCategoryModal from "../components/categories/EditCategoryModal";
import CategoryStatusModal from "../components/categories/DeleteCategoryModal";



const Categories = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [statusCategory, setStatusCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const data = await getCategories()
      setCategories(data)
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchCategories()
  },[])

  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold border-b pb-3 mb-3'>Categories</h1>
      </div>
        <CategoryToolbar onAddCategory={() => setShowAddModal(true)} />
        <CategoryTable
          categories={categories}
          onEdit={setEditCategory}
          onStatusChange={setStatusCategory}
        />
        <AddCategoryModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          fetchCategories={fetchCategories}
        />
        <EditCategoryModal
          category={editCategory}
          onClose={() => setEditCategory(null)}
          fetchCategories={fetchCategories}
        />
        <CategoryStatusModal
          category={statusCategory}
          onClose={() => setStatusCategory(null)}
          fetchCategories={fetchCategories}
        />
      </div>
  )
}

export default Categories
