import React from 'react'
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Body_loker = () => {
    let { id } = useParams();

    // Select Value
    const cardsLowongan = [
        {id:1, title:'Kang Servis Printer', bidang:'ICT'},
        {id:2, title:'Kang CCTV', bidang:'ICT'},
        {id:3, title:'Kang Kabel', bidang:'ICT'},
    ];
    const optionPendidikan = [
        {title:'Pendidikan', value:'', disabled:'disabled'},
        {title:'SMA Sederajat', value:'sma', disabled:''},
        {title:'Diploma 3', value:'d3', disabled:''},
        {title:'Strata 1', value:'s1', disabled:''},
        {title:'Strata 2', value:'s2', disabled:''},
        {title:'Strata 3', value:'s3', disabled:''},
    ];
    const optionBidang = [
        {title:'Bidang', value:'', disabled:'disabled'},
        {title:'ICT', value:'ict', disabled:''},
        {title:'Finance', value:'finance', disabled:''},
        {title:'Production', value:'production', disabled:''},
        {title:'Electrical', value:'electrical', disabled:''},
        {title:'Mechanical', value:'mechanical', disabled:''},
    ];

    const listLowongan = [
        {id:1, title:'Kang Printer', kategori:[{pend:'S1', bidang:'ICT'}]},
        {id:2, title:'Kang CCTV', kategori:[{pend:'S1', bidang:'ICT'}]},
        {id:3, title:'Kang Kabel', kategori:[{pend:'S1', bidang:'ICT'}]},
        {id:4, title:'Kang Foto Copy', kategori:[{pend:'S1', bidang:'ICT'}]},
        {id:4, title:'Kang Service', kategori:[{pend:'S1', bidang:'ICT'}]},
    ];
    return (
        <section className='h-[100vh] px-20 pt-16'>
            <div className="flex md:flex-cols-2 mt-20 gap-4">
                <div className="md:w-5/12 h-56 bg-white shadow-md rounded-lg text-center space-y-7 md:py-4">
                    <div className='md:text-xl font-semibold'>
                        <span className=" text-colorBodies3">Kategori</span>
                    </div>
                    <motion.form
                    className='mt-5 space-y-4'>
                        <select id="bidang" 
                        defaultValue={""}
                        className="md:p-3 p-2 outline outline-1 outline-slate-200 text-sm md:w-72 w-60 rounded shadow-none transition-all focus:outline-blue-500 focus:shadow-lg focus:transition-all">
                            {optionPendidikan.map((pend)=> {
                                return(<option key={pend.value} value={pend.value} disabled={pend.disabled}>{pend.title}</option>)
                            })}
                        </select>
                        <select id="bidang" 
                        defaultValue={""}
                        className="md:p-3 p-2 outline outline-1 outline-slate-200 text-sm md:w-72 w-60 rounded shadow-none transition-all focus:outline-blue-500 focus:shadow-lg focus:transition-all">
                            {optionBidang.map((bidang)=> {
                                return(<option key={bidang.value} value={bidang.value} disabled={bidang.disabled}>{bidang.title}</option>)
                            })}
                        </select>
                        <input
                        type="text"
                        placeholder="Search"
                        className="md:p-3 p-2 outline outline-1 outline-slate-200 text-sm md:w-72 w-60 rounded shadow-none transition-all focus:outline-blue-500 focus:shadow-lg focus:transition-all"
                        />
                        <div>
                            <button className='px-2 py-1 bg-colorBodies3 text-white text-sm shadow-md hover:shadow-lg'>Submit</button>
                        </div>
                    </motion.form>
                </div>
                <div className="bg-white w-full py-6 px-10 space-y-3">
                    {listLowongan.map((lowongan) => {
                        return(
                            <div className=' outline outline-1 p-4 outline-slate-200 rounded-md' key={lowongan.id}>
                                <div className=''>
                                    <span className='font-semibold text-xl'>{lowongan.title}</span>
                                </div>
                            </div>
                        );
                    })}
                    <div className="text-center">
                        <div className="sm:text-3xl text-2xl font-bold mb-5">
                            <span className=" text-colorBodies3">Lowongan</span>
                        </div>
                    </div>
                    {/* <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    className="grid md:grid-cols-3 sm:grid-cols-2 mt-12 gap-4 p-3 bg-colorBodies3 rounded-lg"
                    >
                    {categories.map((category) => {
                        return <Categories key={category.id} {...category} />;
                    })}
                    </motion.div> */}
                </div>
            </div>
        </section>
    )
}

export default Body_loker