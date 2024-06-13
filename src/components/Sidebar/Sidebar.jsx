import React from 'react'
import { FaHome,FaIdCard, FaSearch } from 'react-icons/fa'
import { navLinksCakars } from '../../Data';
import sideLink from './sideLink';

const Sidebar = () => {
    return (
        <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] hidden sm:w-[250px] pt-8 px-1 sm:flex flex-col items-start justify-between">
            <div className="space-y-8 w-full ">
                <a href='#' className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}>
                    <span><FaHome/></span>
                    <h1 className={`text-gray-600 group-hover:text-black sm:flex hidden `} >Beranda</h1>
                </a>
                <a href='#' className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}>
                    <span><FaIdCard/></span>
                    <h1 className={`text-gray-600 group-hover:text-black sm:flex hidden `} >Data Pribadi</h1>
                </a>
                <a href='#' className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}>
                    <span><FaSearch/></span>
                    <h1 className={`text-gray-600 group-hover:text-black sm:flex hidden `} >Lowongan</h1>
                </a>
            </div>
            
            <div className="xl:flex flex-col hidden  items-center justify-center space-y-4 px-4 py-4 ">
                <h1 className="text-xl w-full font-medium"> Grow Your <br /> Saving Now!</h1>
                <p> Pick an investment strategy that reflexts your goals </p>
                <button className=" w-full py-2 px-3 bg-black text-white">Become a Pro</button>
            </div>
        </nav>
    )
}

export default Sidebar