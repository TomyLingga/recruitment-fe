import React from 'react'
import { FiUserPlus, FiUserCheck, FiLogIn, FiEdit, FiFileText } from 'react-icons/fi';
import { RiQuestionnaireLine } from "react-icons/ri";

const Apply = () => {
    const register = [
        {
            id: 1,
            icon: <FiUserPlus/>,
            category: "Registrasi Akun",
        },
        {
            id: 2,
            icon: <FiLogIn/>,
            category: "Login",
        },
        {
            id: 3,
            icon: <FiFileText/>,
            category: "Input Lamaran",
        },
        {
            id: 4,
            icon: <RiQuestionnaireLine/>,
            category: "Validasi Lamaran",
        },
        {
            id: 5,
            icon: <FiUserCheck/>,
            category: "Proses Rekrutment",
        },
    ];
  return (
    // <section className='px-56 py-10 bg-gradient-to-b from-[#EAF2F8] via-gray-300 to-[#EAF2F8] my-10' id='about'>
    <section className='px-56 py-10 bg-white my-10' id='about'>
        <div className="text-center md:mb-24 md:mt-8">
            <div className="sm:text-3xl text-2xl font-bold mb-5">
                Tata Cara <span className="text-colorBodies3">Melamar</span>
            </div>
            <div className='grid md:grid-cols-5 sm:grid-cols-2 items-center mt-20 gap-4 p-3 bg-transparent md:border-t-8 md:border-slate-300 md:border-solid'>
                {register.map((pers) => {
                    return (
                        <div className='p-3 md:-m-36' key={pers.id}>
                            <div className='flex items-center justify-center flex-col gap-4 bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300 p-8 rounded-full h-20 w-20 mx-auto'>
                                <span className='text-4xl'>{pers.icon}</span>
                            </div>
                            <div className='mt-3'>
                                <span className='text-lg font-bold'>{pers.category}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Apply