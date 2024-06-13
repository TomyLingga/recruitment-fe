import React, { useEffect, useState } from 'react';
import { Link, useNavigate, Navigate  } from "react-router-dom";

import { HiMenuAlt1, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import MobileNavLinks from '../../../../components/Navbar/MobileNavLink';
import { navLinksCakar } from '../../../../Data';

// Components
import Sidebar from '../../../../components/Sidebar/Sidebar';

import './style.css'

const DashHome = () => {
    const [typeTogNav, setTypeTogNav] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [token, setToken] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    function showHideNav() {
        setTypeTogNav(!typeTogNav);
        console.log(!typeTogNav)
    }

    // function getToken(){
    //     const tok = JSON.parse(localStorage.getItem('user'))
    //     // console.log(tok)
    //     if (tok === null) {
    //         navigate('/login')
    //     } else {
    //         // console.log(tok.data.accessToken);
    //         setToken(tok.data.accessToken);
    //         setName(tok.data.user.nama_lengkap);
    //     }
    // }

    useEffect(() => {
        function getAuth(){
            const load = JSON.parse(localStorage.getItem('user'))
            if (load) {
                const roles = load.data.user.role_user;
                if (roles === '2') {
                    navigate('/dash')
                } else {
                    navigate(-1)
                }
            } else {
                navigate('/login')
            }
        }
        getAuth();
    }, [])

  return (
    <div className="min-h-[91vh] border-r border-gray-200 items-start justify-start flex flex-col w-full">
        {/* <a href="#" className="flex flex-row items-center bg-transparent rounded-lg md:flex-row md:w-full hover:bg-gray-100 ">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-28 md:rounded-none md:rounded-l-lg" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal bg-colorsBodies1 w-full text-colorsBodies3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a> */}
        <div className="w-full items-start justify-start flex flex-col md:pt-3 pt-0 pb-6 space-y-8">
            <div className=" bg-colorBodies4 text-black p-6 text-center md:w-full mx-auto w-full space-y-3">
                <img src="img/tomy.png"
                className="w-32 rounded-full mx-auto"
                alt="Avatar" />
                <h2 className="text-2xl font-semibold">Hallo, Selamat Datang</h2>
                <h2 className="text-3xl font-semibold">{name}</h2>
                <p className='text-xs text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam deleniti praesentium incidunt eveniet culpa placeat.
                </p>
                <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30 md:w-9/12 md:mx-auto" />
                <p className='text-sm'>Posisi yang di lamar: <span className='font-semibold'>Tukang Service Printer</span></p>
                <button type='button' className='rounded p-2 border-2 border-white hover:bg-white hover:text-colorv2Bodies2 text-xs font-medium'>
                    Lihat CV
                </button>
            </div>
            <div className="rounded-lg bg-transparent p-6 text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30 md:w-auto mx-auto w-full space-y-8">
                <h1 className='text-center font-semibold text-colorBodies4 text-xl'>Progress Tahap Seleksi</h1>
                <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t-[20px] md:border-spacing-6 md:space-x-8 md:rounded-md">
                    <li className='md:text-center'>
                        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] md:h-11 md:w-11 rounded-full bg-neutral-300 dark:bg-neutral-300 md:mx-auto md:my-auto md:-mt-8"></div>
                            <p className="mt-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                                Seleksi Berkas
                            </p>
                        </div>
                        <div className="mt-2 ml-4 pb-5 md:ml-0">
                            <h4 className="mb-1.5 text-md font-bold text-green-600">Lulus</h4>
                        </div>
                    </li>
                    <li className='md:text-center'>
                        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] md:h-11 md:w-11 rounded-full bg-neutral-300 dark:bg-neutral-500 md:mx-auto md:my-auto md:-mt-8"></div>
                            <p className="mt-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                                Assesment & Psikotest
                            </p>
                        </div>
                        <div className="mt-2 ml-4 pb-5 md:ml-0">
                            <h4 className="mb-1.5 text-md font-bold text-teal-600">Lulus</h4>
                            <a href='#' className="text-neutral-500 dark:text-neutral-300 text-xs font-light hover:text-yellow-400">Details</a>
                        </div>
                    </li>
                    <li className='md:text-center'>
                        <div className="flex items-center pt-2 md:block md:pt-0">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] md:h-11 md:w-11 rounded-full bg-neutral-300 dark:bg-neutral-500 md:mx-auto md:my-auto md:-mt-8"></div>
                            <p className="mt-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                                Wawancara User & HR
                            </p>
                        </div>
                        <div className="mt-2 ml-4 pb-5 md:ml-0">
                            <h4 className="mb-1.5 text-md font-bold text-red-600">Tidak Lulus</h4>
                        </div>
                    </li>
                    <li className='md:text-center'>
                        <div className="flex items-center pt-2 md:block md:pt-0">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] md:h-11 md:w-11 rounded-full bg-neutral-300 dark:bg-neutral-500 md:mx-auto md:my-auto md:-mt-8"></div>
                            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                                Medical Check Up
                            </p>
                        </div>
                    </li>
                    <li className='md:text-center'>
                        <div className="flex items-center pt-2 md:block md:pt-0">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] md:h-11 md:w-11 rounded-full bg-neutral-300 dark:bg-neutral-500 md:mx-auto md:my-auto md:-mt-8"></div>
                            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                                Probation
                            </p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    </div>
    // <div className='space-y-5 container'>
    //     <div className="p-4 bg-blue-300 text-center rounded-md">
    //         <h1>Test</h1>
    //     </div>
    //     <div className="text-center p-3 bg-slate-600 text-white rounded-md w-auto">4</div>
    // </div>
  )
}

export default DashHome