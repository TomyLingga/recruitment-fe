import React, { useEffect, useState } from 'react'
import { Link, useNavigate, Navigate  } from "react-router-dom";
import { FaSave,  FaPlus, FaEdit } from 'react-icons/fa';
import axios from 'axios';

// Component
import Inputs from '../../../../../components/Forms/Inputs';
import SelectOption from '../../../../../components/Forms/SelectOption';
// import Selects from '../../../../../components/Forms/Selects';
import Select from 'react-select';
// import Select from "react-tailwindcss-select";

const DataPribadi2 = () => {
    const [token, setToken] = useState('');

    // Variable Data Diri
    const [name, setName] = useState('');
    const [nama, inputNama] = useState('');
    const [nik, inputNik] = useState('');
    const [email, inputEmail] = useState('');
    const [agama, inputAgama] = useState('');
    const [kewarganegaraan, inputKewarganegaraan] = useState('');
    const [kelamin, inputKelamin] = useState('');
    const [status_kawin, inputStatusKawin] = useState('');
    const [tanggal_l, inputTanggal] = useState('');
    const [tempat_l, inputTempat] = useState('');
    const [s_sepatu, inputSepatu] = useState('');
    const [s_baju, inputBaju] = useState('');
    const [tinggi_b, inputTinggi] = useState('');
    const [berat_b, inputBerat] = useState('');

    // Navigasi Router
    const navigate = useNavigate();

    const optionAgama = [
        {label:'Islam', value:'islam'},
        {label:'Protestan', value:'protestan'},
        {label:'Khatolik', value:'khatolik'},
        {label:'Hindu', value:'hindu'},
        {label:'Budha', value:'budha'},
        {label:'Konghucu', value:'konghucu'},
    ];
    
    const optionWarganegara = [
        {id: 1, title:'Kewarganegaraan', value:'', disabled:'disabled'},
        {id: 2, title:'Indonesia', value:'indonesia', disabled:''},
        {id: 3, title:'Asing', value:'asing', disabled:''},
    ];
    const optionKelamin = [
        {id: 1, title:'Jenis Kelamin', value:'', disabled:'disabled'},
        {id: 2, title:'Pria', value:'pria', disabled:''},
        {id: 3, title:'Wanita', value:'wanita', disabled:''},
    ];
    const optionKawin = [
        {id: 1, title:'Status Kawin', value:'', disabled:'disabled'},
        {id: 2, title:'Belum Menikah', value:'belum kawin', disabled:''},
        {id: 3, title:'Menikah', value:'kawin', disabled:''},
    ];

    // Variable Custom
    const [editform, setEditForm] = useState(false);
    const [editbutton, setEditButton] = useState('Edit');

    // On Submit
    const SubmitDataPelamar = async (e) => {
        e.preventDefault();
        if (agama === '' &&  kewarganegaraan === '' && kelamin === '' && status_kawin === '' && tanggal_l === '' && tempat_l === '' && tinggi_b === '' && berat_b === '' && s_baju === '' && s_sepatu === '') {
            alert('Harap diisi dengan lengkap !');
        } else {
            try {
                const tokens = JSON.parse(localStorage.getItem('user'))
                const postPelamar = {
                    agama, kewarganegaraan, j_kelamin: kelamin, status_kawin, tanggal_l, tempat_l, tinggi_b, berat_b, s_baju, s_sepatu, user_id: tokens.data.user.user_id
                }
                const bearerToken = {
                    headers: {"Authorization" : `Bearer ${tokens.data.accessToken}`}
                }
                const respPelamar = await axios.post('http://localhost:8000/api/data_pelamar', postPelamar, bearerToken)
                if (respPelamar.data.code === 200) {
                    alert('Sukses !');
                } else {
                    alert('Gagal !');
                }
            } catch (error) {
                alert('Terjadi kesalahan server !');
            }
        }
    }

    // On Click
    const editFormPelamar = async() => {
        setEditForm(!editform);
        if (!editform) {
            setEditButton('Edit')
        } else {
            setEditButton('Cancel')
        }
    }

    useEffect(() => {
        // getTokenlabel
        editFormPelamar()
    }, [])

    return (
        <div>
            <div className='mt-[10px] mb-4 flex items-center justify-between'>
                <div className=' justify-start'>
                    <span className='font-bold'> Data Pribadi</span>
                </div>
                <div className=' flex justify-end space-x-2'>
                    <button className=' font-medium border border-solid border-colorv4Bodies2 text-colorv4Bodies2 bg-white hover:bg-colorv4Bodies2 hover:text-white px-3 py-2 text-xs flex items-center' onClick={editFormPelamar}><FaEdit className='mr-2'/> {editbutton}</button>
                    <button className={`font-medium border border-solid border-blue-500 text-blue-500 bg-white hover:bg-blue-500 hover:text-white disabled:border-blue-300 disabled:bg-white disabled:text-blue-300 px-3 py-2 text-xs flex items-center`} disabled={editform} onClick={SubmitDataPelamar}><FaSave className='mr-2'/> Simpan</button>
                </div>
            </div>
            <div className="md:flex justify-center md:space-x-4">
                <div className="mb-3 md:w-full">
                    <Inputs lables={'NIK / No. Identitas'} placeholder="Nomor Identitas Anda" values={nik} on_change={e=>inputNik(e.target.value)}  dis={true}/>
                </div>
                <div className="mb-3 md:w-full">
                    <Inputs lables={'Nama Lengkap'} placeholder="Nama Anda" values={nama} on_change={e=>inputNama(e.target.value)} dis={true}/>
                </div>
                <div className="mb-3 md:w-full">
                    <Inputs lables={'Email'} placeholder="Email Anda" values={email} on_change={e=>inputEmail(e.target.value)} dis={true}/>
                </div>
            </div>
            <form onSubmit={SubmitDataPelamar}>
                <div className="md:flex justify-center md:space-x-4">
                    <div className="mb-3 md:w-full">
                        <div className="mb-6 text-left">
                            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Agama <span className='text text-red-500'>*</span></label>
                            <Select value={agama} onChange={(e)=>inputAgama(e.target.value)} placeholder={agama} options={optionAgama}/>
                        </div>
                    </div>
                    <div className="mb-3 md:w-full">
                        <SelectOption lables={'Kewarganegaraan'} values={kewarganegaraan} on_change={e=>inputKewarganegaraan(e.target.value)} Options={optionWarganegara} dis={editform} point_label={(<span className='text text-red-500'>*</span>)}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        <SelectOption lables={'Jenis Kelamin'} values={kelamin} on_change={e=>inputKelamin(e.target.value)} Options={optionKelamin} dis={editform} point_label={(<span className='text text-red-500'>*</span>)}/>
                    </div>
                </div>
                <div className="md:flex justify-center md:space-x-4">
                    <div className="mb-3 md:w-full">
                        {/* <SelectOption lables={'Tempat Lahir'} values={agama} on_change={e=>inputAgama(e.target.value)} Options={optionAgama}/> */}
                        <Inputs lables={'Tempat Lahir'} placeholder="Tempat Lahir" values={tempat_l} on_change={e=>inputTempat(e.target.value)} dis={editform} point_label={(<span className='text text-red-500'>*</span>)}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        {/* <SelectOption lables={'Tgl Lahir'} values={kewarganegaraan} on_change={e=>inputKewarganegaraan(e.target.value)} Options={optionWarganegara}/> */}
                        <Inputs lables={'Tgl Lahir'} type='date' placeholder="Tgl Lahir" values={tanggal_l} on_change={e=>inputTanggal(e.target.value)} dis={editform} point_label={(<span className='text text-red-500'>*</span>)}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        <SelectOption lables={'Status Nikah'} values={status_kawin} on_change={e=>inputStatusKawin(e.target.value)} Options={optionKawin} dis={editform} point_label={(<span className='text text-red-500'>*</span>)}/>
                    </div>
                </div>
                <div className="md:flex justify-center md:space-x-4">
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'Tinggi Badan (Cm)'} placeholder="Contoh: 165 cm" values={tinggi_b} on_change={e=>inputTinggi(e.target.value)} dis={editform} point_label={(<span className='text text-red-500'>*</span>)}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'Berat Badan (Kg)'} placeholder="Contoh: 65 Kg" values={berat_b} on_change={e=>inputBerat(e.target.value)} dis={editform} point_label={(<span className='text text-red-500'>*</span>)}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'Ukuran Baju'} placeholder="Contoh: XL" values={s_baju} on_change={e=>inputBaju(e.target.value)} dis={editform} point_label={(<span className='text text-red-500'>*</span>)}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'Ukuran Sepatu'} placeholder="Contoh: 40" values={s_sepatu} on_change={e=>inputSepatu(e.target.value)} dis={editform} point_label={(<span className='text text-red-500'>*</span>)}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DataPribadi2