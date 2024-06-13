import React, { useEffect, useState } from 'react'
import { FaClipboardList,FaRegUserCircle, FaLanguage, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'
import { HiMenuAlt1, HiX, HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";

// Component
import Dropdown from '../component/Dropdown';

const Navbar4 = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(null);

    useEffect(() => {
        const scrollActive = () => {
            setActive(window.scrollY > 100);
        };
        window.addEventListener("scroll", scrollActive);
        return () => window.removeEventListener("scroll", scrollActive);
    }, [active]);

    const navLinkes = [
        {id:1, title:'Home', links:'#'},
        {id:2, title:'How to Apply', links:'#'},
        {id:3, title:'Vacancy', links:'#'},
        {id:4, title:'FAQ', links:'#'},
        {id:5, title:'Contact Us', links:'#'},
    ];
    
    return (
        // <div className="w-full py-4 bg-colorv2Bodies2 items-center justify-between flex px-8">
        <div className={`${active ? "md:shadow-lg bg-white" : "bg-transparent" } md:fixed w-full items-center justify-between flex top-0 md:px-0`}>
            
            {/* BurgerMenu */}
            <div className={`${active ? "md:shadow-lg bg-white" : "md:shadow-sm bg-transparent" } md:hidden w-full font-bold text-lg text-center text-colorv2Bodies1 px-8 py-5`}>
                <a href="#">e-Recruitment</a>
            </div>
            
            {/* search */}
            <div className="w-full flex items-center md:justify-center justify-end md:py-0 py-4">
                <img src="inl-ori.png" alt="PT. Industri Nabati Lestari" className="photo md:ml-24" />
                {/* <img src={`${active ? "img/inl-ori-white.png" : "inl-ori.png"}`} alt="" className="photo mr-8" /> */}
            </div>

            {/* logo */}
            <div className="items-center w-full justify-start md:flex md:justify-center space-x-7 hidden bg-colorv2Bodies rounded-l-full py-6">
                {navLinkes.map((nal)=> {
                    return(<a href={nal.links} key={nal.id} className={`${active ? "hover:text-colorv2Bodies": "hover:text-colorv2Bodies1"}`}>
                            <span className='font-semibold text-sm'>{nal.title}</span>
                        </a>)
                })}
            </div>

            {/* icons */}
            <div className="items-center justify-end md:flex hidden w-full bg-colorv2Bodies pr-20">
                <button className={`md:py-3 pl-[50px] hover:text-colorv2Bodies rounded-l-xl bg-colorv2Bodies1 text-white inline-flex items-center`}>
                    <span className='p-3 rounded-lg border-2 border-white text-sm'>Masuk</span>
                </button>
                <button className={`md:py-3 px-[50px] hover:text-colorv2Bodies rounded-r-xl bg-colorv2Bodies1 text-white inline-flex items-center`}>
                    <span className='p-3 rounded-lg border-2 border-white text-sm'>Daftar</span>
                </button>
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

export default Navbar4