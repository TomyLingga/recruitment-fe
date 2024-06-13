import React, { useEffect, useState } from 'react'
import { Link, useNavigate, Navigate  } from "react-router-dom";
import { FaSave,  FaPlus, FaEdit, FaUserCheck, FaHouseUser, FaPhoneAlt } from 'react-icons/fa';
import axios from 'axios';

// Data Component
import DataKontak from './DataKontak';
import DataPribadi2 from './DataPribadi2';
import DataAlamat from './DataAlamat';

const DataPribadi = () => {
    // Variable 
    const [openTab, setOpenTab] = useState(1);
    const [dataKontak, loadDataKontak] = useState([]);

    // OnLoad
    // const GetData = async() => {
    //     const tokens = JSON.parse(localStorage.getItem('user'))
    //     const bearerToken = {
    //         headers: {"Authorization" : `Bearer ${tokens.data.accessToken}`}
    //     }
    //     const user_id = tokens.data.user.user_id;
    //     await axios.get(`http://localhost:8000/api/profil/user/${user_id}`, bearerToken).then(res => {
    //         const loadDataPelamar = res.data.data[0];
    //         // console.log(res.data.data[0])
    //         // console.log(loadDataPelamar.kontak_pelamar)
    //         loadDataKontak(loadDataPelamar.kontak_pelamar)
    //     }).catch(err => {
    //         console.log(err.data);
    //     })
    // }

    // useEffect(() => {
    //     GetData()
    // }, [])

    return (
        <div className=' bg-transparent mr-10 w-[170vh]'>
            <div className='py-8'>
                <div className='px-5 py-6 bg-white rounded-md md:space-y-5 shadow-lg'>
                    <div className='w-full flex justify-between px-12 bg-colorv2Bodies1 py-4'>
                        <div className="flex items-center justify-start ">
                            <span className='text-2xl font-semibold text-white'>DATA PELAMAR</span>
                        </div>
                        <div className="flex items-center justify-end ">
                            <ul className="flex space-x-2 font-semibold">
                                <li>
                                    <a
                                        href="#"
                                        onClick={() => setOpenTab(1)}
                                        className={`${openTab === 1 ? "px-6 shadow-md shadow-[#5589aa] transition-all" : "px-4 shadow-none transition-all"} bg-white text-gray-600 text-sm border-2 border-solid border-white ease-in-out duration-300 py-2 rounded-full flex items-center`}
                                    >
                                        <FaUserCheck className={`${openTab === 1 ? 'mr-4' : 'mr-2'} transition-all ease-in-out duration-300`}/> Data Pribadi
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        onClick={() => setOpenTab(2)}
                                        className={`${openTab === 2 ? "px-6 shadow-md shadow-[#5589aa] transition-all" : "px-4 shadow-none transition-all"} bg-white text-gray-600 text-sm border-2 border-solid border-white ease-in-out duration-300 py-2 rounded-full flex items-center`}
                                    >
                                        <FaPhoneAlt className={`${openTab === 2 ? 'mr-4' : 'mr-2'} transition-all ease-in-out duration-300`}/> Kontak
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        onClick={() => setOpenTab(3)}
                                        className={`${openTab === 3 ? "px-6 shadow-md shadow-[#5589aa] transition-all" : "px-4 shadow-none transition-all"} bg-white text-gray-600 text-sm border-2 border-solid border-white ease-in-out duration-300 py-2 rounded-full flex items-center`}
                                    >
                                        <FaHouseUser className={`${openTab === 3 ? 'mr-4' : 'mr-2'} transition-all ease-in-out duration-300`}/> Alamat
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='border py-3 rounded-md'>
                        
                        <div className='px-12 mt-[10px] mb-4 md:flex items-center justify-center'>
                            <div className={`${openTab === 1 ? "block" : "hidden"} md:w-full py-2`}>
                                <DataPribadi2/>
                            </div>
                            <div className={`${openTab === 2 ? "block" : "hidden"} md:w-full py-2`}>
                                <DataKontak/>
                            </div>
                            <div className={`${openTab === 3 ? "block" : "hidden"} md:w-full py-2`}>
                                <DataAlamat/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataPribadi