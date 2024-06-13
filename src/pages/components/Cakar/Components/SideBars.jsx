import React, { useEffect, useState } from 'react'
import { Link, useNavigate, Navigate  } from "react-router-dom";

const SideBars = () => {
    const [nameSide, setNameSide] = useState('');
    const navigate = useNavigate();

    function getToken(){
        const tok = JSON.parse(localStorage.getItem('user'))
        // console.log(tok)
        if (tok === null) {
            navigate('/login')
        } else {
            // const respPelamar = axios.get(`http://localhost:8000/api/profil/user/${user_id}`, bearerToken);
            // console.log(respPelamar.data.data[0]);
            // console.log(tok.data.accessToken);
            // setToken(tok.data.accessToken);
            setNameSide(tok.data.user.nama_lengkap);
        }
    }

    const menuCV = [
        {id:1, title:'Identitas Diri', href:'/datadiri'},
        {id:2, title:'Kontak', href:'/kontak'},
        {id:3, title:'Alamat', href:'#'},
        {id:4, title:'Pendidikan Formal', href:'/pendidikanformal'},
        {id:5, title:'Pengalaman Kerja', href:'#'},
        {id:6, title:'Pengalaman Organisasi', href:'#'},
        {id:7, title:'Data Pendukung', href:'#'},
    ];

    function logout() {
        localStorage.removeItem("user");
        navigate('/login')
    }

    useEffect(() => {
        getToken();
    }, [])

    return (
        <div className='bg-transparent text-center w-[285px] md:px-6 md:py-8'>
            <div className='py-4 rounded-lg bg-[#5589aa] text-white shadow-lg'>
                <img src="img/tomy.png"
                className="w-32 rounded-full mx-auto border-4"
                alt="Avatar" />
                <p className='mt-5 text-sm font-semibold'>{nameSide}</p>
                <div className='mt-3'>
                    <button className='text-xs px-4 py-2 border border-solid rounded'>Lihat CV</button>
                </div>
                <hr className='mt-5 w-48 mx-auto border-[#5695bc] border' />
                <div className="flex items-start mt-5">
                    <ul className="mr-4 flex w-full flex-col flex-wrap pl-0">
                        {menuCV.map((edu)=> {
                            return(
                                <li className="flex-grow text-left" key={edu.id}>
                                    <a 
                                    href={edu.href}
                                    className="my-1 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight rounded-tr-none rounded-br-none text-white hover:isolate hover:border-transparent hover:bg-neutral-100 hover:text-neutral-500 hover:rounded-tr-md hover:rounded-br-md focus:isolate active:bg-neutral-100s focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400" 
                                    >{edu.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <hr className='w-48 mx-auto border-[#5695bc] border' />
                <div className='flex items-start'>
                    <ul className="mr-4 flex w-full flex-col flex-wrap pl-0">
                        <li className="flex-grow text-left">
                            <a 
                            onClick={logout}
                            className="mt-2 mb-0 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight rounded-tr-none text-white hover:isolate hover:border-transparent rounded-br-none hover:bg-neutral-100 hover:text-neutral-500 hover:rounded-tr-md hover:rounded-br-md focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400" 
                            >Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBars