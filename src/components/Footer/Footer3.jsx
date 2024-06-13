import React from 'react'
import { FaUser, FaSignOutAlt, FaSearch, FaThList, FaHome} from 'react-icons/fa'

const Footer3 = () => {
    return (
        <footer className="fixed md:hidden bottom-0 left-0 z-20 w-full p-0 shadow flex items-center justify-center md:p-6">
            <div className="grid max-w-screen-xl grid-cols-4 justify-center items-center text-sm text-white bg-transparent w-full">
                <a href='/dash' className='flex flex-col w-full h-full items-center text-center border-r border-t-2 border-white bg-[#5589aa] py-2 space-y-2 rounded-bl-2xl'>
                    <h5 className="text-md font-bold tracking-tight"><FaHome className='text-2xl'/></h5>
                    <span className="text-xs">Beranda</span>
                </a>
                <a href='/datadiri' className='flex flex-col w-full h-full items-center text-center border-r border-t-2 border-white bg-[#5589aa] py-2 space-y-2'>
                    <h5 className="text-md font-bold tracking-tight"><FaThList className='text-2xl'/></h5>
                    <span href="#" className="text-xs">Data Pribadi</span>
                </a>
                <a href='/vacancy' className='flex flex-col w-full h-full items-center text-center border-r border-t-2 border-white bg-[#5589aa] py-2 space-y-2'>
                    <h5 className="text-md font-bold tracking-tight"><FaSearch className='text-2xl'/></h5>
                    <span href="#" className="text-xs">Lowongan</span>
                </a>
                <a href='/login' className='flex flex-col w-full h-full items-center text-center border-t-2 border-white bg-[#5589aa] py-2 space-y-2 rounded-br-2xl'>
                    <h5 className="text-md font-bold tracking-tight"><FaSignOutAlt className='text-2xl'/></h5>
                    <span href="#" className="text-xs">Logout</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer3