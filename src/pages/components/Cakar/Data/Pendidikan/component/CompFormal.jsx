import React, { useEffect, useState } from 'react'
import { FaPlus, FaSave } from 'react-icons/fa';

// Components
import Inputs from '../../../../../../components/Forms/Inputs';

const CompFormal = () => {
    // Variable Input
    const [nama, inputNama] = useState('');

    return (
        <div className=' bg-transparent mr-10 h-[100vh] w-[170vh]'>
            <div className='py-8'>
                <div className='px-5 py-6 bg-white rounded-md md:space-y-5 shadow-lg'>
                    <div>
                        <span className='text-2xl font-semibold'>Pendidikan Formal</span>
                    </div>
                    <div className='text-right space-x-3 font-medium flex justify-end'>
                        <button className='flex items-center space-x-7 px-3 py-2 bg-white text-xs border border-blue-600 text-blue-600 shadow-none hover:shadow-md transition-all hover:transition-all'><FaPlus className='mr-2'/> Tambah</button>
                        <button className='flex items-center px-3 py-2 bg-blue-600 text-xs text-white shadow-none hover:shadow-md transition-all hover:transition-all hover:bg-blue-400'><FaSave className='mr-2'/>Simpan</button>
                    </div>
                    <div className='border py-8'>
                        <div className="md:flex justify-center md:space-x-4 md:w-11/12 mx-auto">
                            <div className="mb-3 md:w-full">
                                <Inputs lables={'Jenjang Pendidikan'} placeholder="Nama Anda" values={nama} on_change={e=>inputNama(e.target.value)}/>
                            </div>
                            <div className="mb-3 md:w-full">
                                <Inputs lables={'Sekolah / Perguruan Tinggi'} placeholder="Nama Anda" values={nama} on_change={e=>inputNama(e.target.value)}/>
                            </div>
                            <div className="mb-3 md:w-full">
                                <Inputs lables={'Jenis Perguruan Tinggi'} placeholder="Nama Anda" values={nama} on_change={e=>inputNama(e.target.value)}/>
                            </div>
                        </div>
                        <div className="md:flex justify-center md:space-x-4 md:w-11/12 mx-auto">
                            <div className="mb-3 md:w-full">
                                <Inputs lables={'Fakultas'} placeholder="Nama Anda" values={nama} on_change={e=>inputNama(e.target.value)}/>
                            </div>
                            <div className="mb-3 md:w-full">
                                <Inputs lables={'Jurusan'} placeholder="Nama Anda" values={nama} on_change={e=>inputNama(e.target.value)}/>
                            </div>
                            <div className="mb-3 md:w-full">
                                <Inputs lables={'IPK/Nilai'} placeholder="Nama Anda" values={nama} on_change={e=>inputNama(e.target.value)}/>
                            </div>
                        </div>
                        <div className="md:flex justify-center md:space-x-4 md:w-11/12 mx-auto">
                            <div className="mb-3 md:w-full">
                                <Inputs lables={'Negara'} placeholder="Nama Anda" values={nama} on_change={e=>inputNama(e.target.value)}/>
                            </div>
                            <div className="mb-3 md:w-full">
                                <Inputs lables={'Kota/Kab'} placeholder="Nama Anda" values={nama} on_change={e=>inputNama(e.target.value)}/>
                            </div>
                            <div className="mb-3 md:w-full">
                                <Inputs lables={'Tahun Pendidikan (Awal)'} placeholder="Nama Anda" values={nama} on_change={e=>inputNama(e.target.value)}/>
                            </div>
                            <div className="mb-3 md:w-full">
                                <Inputs lables={'Tahun Pendidikan (Awal)'} placeholder="Nama Anda" values={nama} on_change={e=>inputNama(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    {/* <div className='border p-2'>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CompFormal