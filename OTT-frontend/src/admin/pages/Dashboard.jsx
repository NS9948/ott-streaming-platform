import React, { useEffect, useState } from 'react'
import StatCard from '../components/dashboard/StatCard'
import { FiFilm } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { getDashboardData } from '../../services/dashboardService';
import LatestMovieCard from '../components/dashboard/LatestMovieCard';
import LatestUserCard from '../components/dashboard/LatestUserCard';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading,setLoading] = useState(true)
  const [error, setError] = useState("")
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        const data = await getDashboardData()
        setDashboardData(data)
        setError("");
      } catch (error) {
        setError("Failed to load dashboard!!")
      } finally{
        setLoading(false)
      }

    }
    fetchDashboardData()

  },[])


  const statistics = [
    {
      id: "total-movies",
      icon: <FiFilm/>,
      title: "Total Movies",
      value: dashboardData?.data?.stats?.totalMovies ?? "-",
      change: "+12 this week"
    },
    {
      id: "total-users",
      icon: <FiUsers/>,
      title: "Total Users",
      value: dashboardData?.data?.stats?.totalUsers ?? "-",
      change: "+12 this week"
    },
    {
      id: "premium-users",
      icon: <FiUserCheck/>,
      title: "Total Premium Users",
      value: "456",
      change: "+12 this week"
    },
    {
      id: "active-subscriptions",
      icon: <FiCreditCard/>,
      title: "Active Subscription",
      value: "456",
      change: "+12 this week"
    },
    {
      id: "revenue",
      icon: <FiDollarSign/>,
      title: "Total Revenue",
      value: "$99999",
      change: "+12 this week"
    }
  ]
  if (loading) {
    return <div>Loading dashboard...</div>;
  }
  
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className='flex flex-col gap-8 '>

      <section>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
      </section>
      <section className='space-y-4'>
        <h2 className="text-xl font-semibold">Statistics</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pl-2'>
          {statistics.map((stat) => (
            <StatCard
              key={stat.id}
              icon={stat.icon} 
              title={stat.title} 
              value={stat.value} 
              change={stat.change} />
          ))}
        </div>
      </section>
      <section>
        <h2>Recent Activity</h2>
      </section>
      <section>
        <h2 className='text-xl font-semibold mb-5'>Latest Movies</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ml-3'>
          {dashboardData.data.latestMovies.map((movie) => (
            <LatestMovieCard movie={movie} key={movie._id}/>
          ))}
        </div>
      </section>
      <section>
        <h2>Latest Users</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ml-3 mt-5'>
          {dashboardData.data.recentUsers.map((user) => (
            <LatestUserCard user={user} key={user._id}/>
          ))}
        </div>
      </section> 

    </div>
  )
}

export default Dashboard
