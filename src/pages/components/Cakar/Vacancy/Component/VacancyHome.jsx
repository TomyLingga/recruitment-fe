import React from 'react'
import Card from '../../../../../components/component/Card';

const VacancyHome = () => {
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
    return (
        <div className="mt-10 col-span-2 min-h-[91vh] border-r border-gray-200 items-start justify-start flex flex-col w-full">
            <div className="w-full items-start justify-start flex flex-col px-12 pt-12 pb-3 space-y-8">
                <div className="rounded-lg bg-transparent text-colorBodies4 text-center p-6 md:w-10/12 mx-auto w-full space-y-4">
                    <h2 className="text-3xl font-semibold">Lowongan</h2>
                    <p className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam deleniti praesentium incidunt eveniet culpa placeat.
                    </p>
                    <div className="md:flex justify-center md:space-x-4">
                        <div className="mb-3 md:w-96 w-full">
                            <select id="countries" 
                            defaultValue={""}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {optionPendidikan.map((edu)=> {
                                    return(<option key={edu.value} value={edu.value} disabled={edu.disabled}>{edu.title}</option>)
                                })}
                            </select>
                        </div>
                        <div className="mb-3 md:w-96 w-full">
                            <select id="countries" 
                            defaultValue={""}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {optionBidang.map((bidang)=> {
                                    return(<option key={bidang.value} value={bidang.value} disabled={bidang.disabled}>{bidang.title}</option>)
                                })}
                            </select>
                        </div>
                        <div className="mb-3 md:w-96 w-full">
                            <input type="text" id="first_name" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                            placeholder="Lokasi" required/>
                        </div>
                    </div>
                    <button type='button' className='rounded p-2 border-2 border-white hover:bg-white hover:text-colorv2Bodies2 text-xs font-medium'>
                        Submit
                    </button>
                </div>
            </div>
            <div className="p-3 rounded-lg md:p-8 w-full mb-8">
                <div className="grid max-w-screen-xl grid-cols-1 gap-8 p-4 mx-auto text-gray-900 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-6 dark:text-white sm:p-8">
                    {cardsLowongan.map((load) => {
                        return (
                            <Card
                                key={load.id}
                                {...load}
                            />
                        );
                    })}
                    {/* <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">Open source projects</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">Contributors</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
                        <dd className="font-light text-gray-500 dark:text-gray-400">Organizations</dd>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default VacancyHome