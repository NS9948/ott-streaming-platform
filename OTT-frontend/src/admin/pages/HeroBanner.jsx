import React, { useEffect, useState } from 'react'
import { getHeroBanners } from '../../services/heroBanner'
import HeroBannerTable from '../components/HeroBanner/HeroBannerTable'
import HeroBannerToolbar from '../components/HeroBanner/HeroBannerToolbar'
import { useNavigate } from 'react-router-dom'
import EditHeroBanner from '../components/HeroBanner/EditHeroBanner'
import DeleteHeroBanner from '../components/HeroBanner/DeleteHeroBanner'

const HeroBannerAdmin = () => {
  const navigate = useNavigate();
  const [heroBanners, setHeroBanners] = useState([])
  const [loading,setLoading] =useState(true)
  const [error,setError] = useState("")
  const [selectedHeroBanner, setSelectedHeroBanner] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const fetchHeroBanners = async () => {
    try {
      setLoading(true)
      const data = await getHeroBanners()
      setHeroBanners(data)
      setError("")
    } catch (error) {
      setError("Failed to fetch Hero Banners")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHeroBanners()
  },[])

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>{error}</h1>

  const handleAddHeroBanner = () => {
    navigate("/admin/hero/addHero-banner");
  };

  const handleEditHeroBanner = (heroBanner) => {
    setSelectedHeroBanner(heroBanner);
    setIsEditModalOpen(true);
  };

  const handleDeleteHeroBanner = (heroBanner) => {
    setSelectedHeroBanner(heroBanner);
    setIsDeleteModalOpen(true);
  }   


  return (
    <div className="p-6">
      <HeroBannerToolbar search="" onSearchChange={() => {}} onAddHeroBanner={handleAddHeroBanner}/>
      <h1 className="text-2xl font-semibold mb-6">
        Hero Banners
      </h1>

      <HeroBannerTable heroBanners={heroBanners} handleEditHeroBanner={handleEditHeroBanner} handleDeleteHeroBanner={handleDeleteHeroBanner}/>
      {isEditModalOpen && <EditHeroBanner heroBanner={selectedHeroBanner} fetchHeroBanners={fetchHeroBanners} onClose={() => setIsEditModalOpen(false)}/>}
      {isDeleteModalOpen && <DeleteHeroBanner heroBanner={selectedHeroBanner} fetchHeroBanners={fetchHeroBanners} onClose={() => setIsDeleteModalOpen(false)}/>}
      
    </div>
  )
}

export default HeroBannerAdmin
