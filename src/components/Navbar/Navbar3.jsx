import React, { useEffect, useState } from 'react'
import { Link, useNavigate, Navigate  } from "react-router-dom";
import { FaRegBell,FaRegUserCircle, FaLanguage, FaSignOutAlt } from 'react-icons/fa'
import { HiMenuAlt1, HiX, HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";

// Component
import Dropdown from '../component/Dropdown';

const Navbar3 = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const scrollActive = () => {
            setActive(window.scrollY > 30);
        };
        window.addEventListener("scroll", scrollActive);
        return () => window.removeEventListener("scroll", scrollActive);
    }, [active]);
    
    // Logout
    function logout() {
        localStorage.removeItem("user");
        navigate('/login')
    }

    return (
        // <div className="w-full py-4 bg-colorv2Bodies2 items-center justify-between flex px-8">
        <div className={`md:fixed w-full top-0 md:px-0 z-20`}>
            <div className={`${active ? "md:shadow-lg bg-white/10 backdrop-blur-sm transition-all" : "md:shadow-none bg-transparent transition-all" }  items-center justify-between flex w-[180vh] mx-auto rounded-b-lg`}>
                {/* BurgerMenu */}
                <div className="md:hidden w-full font-bold text-lg text-center bg-white text-colorv2Bodies1 px-8 py-5">
                    <a href="#">e-Recruitment</a>
                </div>
                
                {/* search */}
                <div className="w-[95vh] flex items-center md:justify-start justify-end md:py-0 py-4 pl-[100px]">
                    <img src="inl-ori.png" alt="PT. Industri Nabati Lestari" className="photo mr-8" />
                    {/* <img src={`${active ? "img/inl-ori-white.png" : "inl-ori.png"}`} alt="" className="photo mr-8" /> */}
                </div>

                {/* logo */}
                <div className="items-center w-full justify-start md:flex md:justify-center space-x-4 hidden ">
                    <a href='/dash' className={`${active ? "hover:text-colorv2Bodies": "hover:text-colorv2Bodies1"}  px-4`}>
                        <span className='font-semibold'>Beranda</span>
                    </a>
                    <a href='/datadiri' className={`${active ? "hover:text-colorv2Bodies": "hover:text-colorv2Bodies1"}  px-4`}>
                        <span className='font-semibold'>Data Pribadi</span>
                    </a>
                    <a href='/vacancy' className={`${active ? "hover:text-colorv2Bodies": "hover:text-colorv2Bodies1"}  px-4`}>
                        <span className='font-semibold'>Lowongan</span>
                    </a>
                </div>

                {/* icons */}
                <div className="items-center justify-end md:flex hidden w-[95vh] bg-colorv2Bodies rounded-br-lg">
                    {/* <button className={`md:py-6 px-[70px] hover:text-colorv2Bodies bg-colorv2Bodies1 text-white inline-flex items-center`}>
                        <FaRegUserCircle className='w-5 h-5 mr-2 header-icon'/> Profile
                    </button> */}
                    <button className={`md:py-5 pl-[70px] pr-[100px] hover:text-colorv2Bodies bg-colorv2Bodies1 text-white inline-flex items-center rounded-br-lg`} onClick={logout}>
                        <FaSignOutAlt className='w-5 h-5 mr-2 header-icon'/> Sign Out
                    </button>
                </div>
            </div>
            
            

            {toggle && (
                <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed h-full w-11/12 top-0 left-0 z-20 bg-colorv2Bodies4 text-white flex md:flex-row flex-col justify-center items-center shadow-lg gap-5 py-8">
                    <li className='list-none cursor-pointer mx-auto hover:text-colorv2Bodies1'>
                        <a href="/dash" className='hover:text-colorv2Bodies1'>Beranda</a>
                    </li>
                    <li className='list-none cursor-pointer mx-auto'>
                        <a href="/dash" className='hover:text-colorv2Bodies1'>Data Pribadi</a>
                    </li>
                    <li className='list-none cursor-pointer mx-auto hover:text-colorv2Bodies1'>
                        <a href="/vacancy" className='hover:text-colorv2Bodies1'>Lowongan</a>
                    </li>
                    <hr className="my-3 h-0.5 p-[0.3px] bg-colorv2Bodies1 w-2/5 mx-auto" />
                    <li className='list-none cursor-pointer mx-auto'>
                        <a href="/login" className="py-3 px-3 font-bold bg-transparent text-sm border-2 rounded-lg border-white hover:bg-white hover:text-Teal">
                            Sign out
                        </a>
                    </li>
                    <HiX
                    className="absolute right-12 top-12 text-3xl cursor-pointer"
                    onClick={(prev) => setToggle(!prev)}
                    />
                </motion.div>
            )}

        </div>
    )
}

export default Navbar3