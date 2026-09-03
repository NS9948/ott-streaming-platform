import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import ProfileDropdown from './ProfileDropdown';
import Notification from './Notification';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isNotificationOpen, setIsNotificationOpen] = useState(false)

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav
            className={`transition-colors duration-300 w-full h-17.5 flex items-center justify-around gap-5 fixed top-0 z-70 ${
                isScrolled ? "bg-black" : "bg-transparent"
            }`}
        >

            <div>
                <img
                    src={logo}
                    alt="Logo"
                    className='h-10 cursor-pointer'
                    onClick={() => navigate('/')}
                />
            </div>

            <div className='w-250 flex gap-5 text-[15px] font-bold'>

                <Link
                    to="/"
                    className='hover:text-[#3AE7E2]'
                >
                    Home
                </Link>

                <Link
                    to="/watchlist"
                    className='hover:text-[#3AE7E2]'
                >
                    Watchlist
                </Link>

                <Link
                    to="/liked-movies"
                    className='hover:text-[#3AE7E2]'
                >
                    Liked
                </Link>

                <Link
                    to="/downloads"
                    className='hover:text-[#3AE7E2]'
                >
                    Downloads
                </Link>

                <Link
                    to="/shorts"
                    className='hover:text-[#3AE7E2]'
                >
                    Shorts
                </Link>

            </div>

            <div className='flex gap-5 items-center'>

                <Link to="/search">
                    <FiSearch
                        className="text-xl text-white cursor-pointer hover:text-[#3AE7E2] transition-colors"
                    />
                </Link>

                <div className='mt-1.5 relative'>
                    <button
                        onClick={() =>
                            setIsNotificationOpen(prev => !prev)
                        }
                    >
                        <IoNotificationsOutline
                            className="text-xl text-white cursor-pointer hover:text-[#3AE7E2] transition-colors"
                        />
                    </button>

                    {isNotificationOpen && <Notification />}
                </div>

                <div className='relative' >
                    <button
                        className='flex items-center gap-2 cursor-pointer'
                        onClick={() =>
                            setIsProfileOpen(prev => !prev)
                        }
                    >
                        <div className="h-10 w-10 rounded-full bg-cyan-500 flex items-center justify-center">
                            <FiUser className="text-white text-2xl" />
                        </div>

                        <span className='text-[15px] font-bold hover:text-[#3AE7E2] transition-colors duration-300'>
                            My Account
                        </span>

                        {isProfileOpen
                            ? <FiChevronUp />
                            : <FiChevronDown />
                        }
                    </button> 

                    {isProfileOpen ? <ProfileDropdown /> : ""}
                </div>

            </div>

        </nav>
    )
}

export default Navbar