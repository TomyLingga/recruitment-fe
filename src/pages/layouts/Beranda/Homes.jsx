import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from 'react-icons/fa';
import hero from '../../../assets/hero.png'
// import {logos} from '../../Data'

const Homes = () => {

    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    function getToken(){
        const tok = JSON.parse(localStorage.getItem('user'))
        console.log(tok)
        // console.log(navigate())
        if (tok === null) {
            navigate('/')
        } 
        else {
            navigate(-1)
        }
    }

    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            },
        },
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    useEffect(() => {
        getToken();
    }, [])

    return (
        <section id='home'>
            <div className="w-full md:w-full px-20 py-32 hero border-b-4 border-solid border-colorBodies3">
                <div className="md:flex items-center justify-center">
                    <div className='md:w-full text-white relative'>
                        <div className='font-bold text-xs mb-4'>
                            {" "}
                            SELAMAT DATANG
                        </div>
                        <div className='sm:text-[2.5rem] text-[1.825rem]'>
                            Rekrutment <br /> <span className='font-semibold'>PT. INDUSTRI NABATI LESTARI</span>
                        </div>
                        {/* <p className='text-sm leading-7 text-gray max-w-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dignissimos ducimus voluptate cum optio, quisquam earum facilis unde praesentium assumenda libero, repellat nulla pariatur labore tempora. Nobis nostrum a repellat!
                        </p> */}
                        <p className='text-sm leading-7 text-gray max-w-sm'>
                        Bergabunglah bersama kami untuk membangun negeri yang lebih baik.
                        </p>
                        <div className="mt-6">
                            <button className='p-3 font-bold text-white bg-colorBodies3 rounded-lg mr-4 text-sm hover:bg-white hover:text-colorBodies3 hover:border-2 hover:border-solid hover:border-colorBodies3 transition-all'>Join Us</button>
                            {/* <button className='px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm'>Discover</button> */}
                        </div>
                    </div>
                    {/* <div className='md:w-[60%]'>
                        <img src='img/lock.png' alt=""/>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Homes