import React from 'react'
import HeroBannerRow from './HeroBannerRow'

const HeroBannerTable = ({heroBanners,handleEditHeroBanner,handleDeleteHeroBanner}) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="min-w-full">
        <thead className="bg-[#2f2f2f] text-gray-300">
          <tr>
            <th className="px-4 py-3 text-left">Banner</th>
            <th className="px-4 py-3 text-left">Movie</th>
            <th className="px-4 py-3 text-left">Order</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {heroBanners.map((heroBanner) => (
            <HeroBannerRow key={heroBanner._id} heroBanner={heroBanner} onEdit={handleEditHeroBanner} onDelete={handleDeleteHeroBanner}/>
          ))}
            
        </tbody>
      </table>
    </div>
  )
}

export default HeroBannerTable
