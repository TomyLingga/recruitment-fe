import React, { useEffect, useState } from 'react'
import { FaSave,  FaPlus, FaEdit } from 'react-icons/fa';
import axios from 'axios';

// Components
import Inputs from '../../../../../components/Forms/Inputs';
import Button from '../../../../../components/Forms/Button';

// Data
import calonKaryawan from '../../../../../data/pelamar';

const DataKontak = () => {

    // Variable
    const [no_hp, inputNoHp] = useState('')
    const [no_telepon, inputNoTelp] = useState('')
    const [no_wa, inputNoWa] = useState('')
    const [no_telegram, inputNoTelegram] = useState('')
    const [linkedin, inputLinkedin] = useState('')
    const [fb, inputFb] = useState('')
    const [twitter, inputTwitter] = useState('')
    const [instagram, inputInstagram] = useState('')

    // Variable Custom
    const [editform, setEditForm] = useState(false);
    const [editbutton, setEditButton] = useState('Edit');

    // On Click
    function editFormPelamar(){
        setEditForm(!editform);
        if (!editform) {
            setEditButton('Edit')
        } else {
            setEditButton('Cancel')
        }
    }

    // OnSubmit
    const submitKontak = async(e) =>{
        e.preventDefault();
        if (no_hp === '' &&  no_telepon === '' && no_wa === '' && linkedin === '') {
            alert('Harap diisi dengan lengkap !');
        } else {
            try {
                const tokens = JSON.parse(localStorage.getItem('user'))
                const postKontak = {
                    no_hp, no_telepon, no_wa, no_telegram, linkedin, fb, twitter, instagram
                }
                const bearerToken = {
                    headers: {"Authorization" : `Bearer ${tokens.data.accessToken}`}
                }
                const respKontak = await axios.post('http://localhost:8000/api/kontak_pelamar', postKontak, bearerToken)
                if (respKontak.data.code === 200) {
                    alert('Sukses !');
                } else {
                    alert('Gagal !');
                }
            } catch (error) {
                alert('Terjadi kesalahan server !');
            }
        }
    }

    useEffect(() => {
        // Function
        async function GetKontak(){
            const tokens = JSON.parse(localStorage.getItem('user'));
            const bearerToken = {
                headers: {"Authorization" : `Bearer ${tokens.data.accessToken}`}
            }
            try {
                const user_id = tokens.data.user.user_id;
                const response = await calonKaryawan.getKontak(user_id, bearerToken);
                console.log(response.data);
                inputNoHp(response.data.no_hp)
                inputNoTelp(response.data.no_telepon)
                inputNoWa(response.data.no_wa)
                inputNoTelegram(response.data.no_telegram)
                inputLinkedin(response.data.linkedin)
                inputInstagram(response.data.instagram)
                inputTwitter(response.data.twitter)
                inputFb(response.data.fb)
            } catch (error) {
                inputNoHp('')
                inputNoTelp('')
                inputNoWa('')
                inputNoTelegram('')
                inputLinkedin('')
                inputInstagram('')
                inputTwitter('')
                inputFb('')
            }
        }

        editFormPelamar()
        GetKontak()
    }, [])

    return (
        <div className=''>
            <div className='flex items-center justify-between mb-4'>
                <div className=' justify-start'>
                    <span className='font-bold'>Kontak</span>
                </div>
                <div className=' flex justify-end space-x-2'>
                    <Button lable={editbutton} size={'xs'} color={'warning-line'} icons_before={(<FaEdit className='mr-2'/>)} onclicks={editFormPelamar} />
                    <Button lable={'Simpan'} size={'xs'} color={'primary-line'} icons_before={(<FaSave className='mr-2'/>)} onclicks={submitKontak} disable={editform} />
                </div>
            </div>
            <form onSubmit={submitKontak}>
                <div className="md:flex justify-center md:space-x-4">
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'No.HP'} placeholder="08xx" values={no_hp} on_change={e=>inputNoHp(e.target.value)} point_label={(<span className='text text-red-500'>*</span>)} dis={editform}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'No Telpon'} placeholder="08xx" values={no_telepon} on_change={e=>inputNoTelp(e.target.value)} point_label={(<span className='text text-red-500'>*</span>)} dis={editform}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'No WhatsApp'} placeholder="08xx" values={no_wa} on_change={e=>inputNoWa(e.target.value)} point_label={(<span className='text text-red-500'>*</span>)} dis={editform}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'No Telegram'} placeholder="08xx" values={no_telegram} on_change={e=>inputNoTelegram(e.target.value)} dis={editform}/>
                    </div>
                </div>
                <div className="md:flex justify-center md:space-x-4">
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'LinkedIn'} placeholder="https://www.linkedin.com/in/xxx" values={linkedin} on_change={e=>inputLinkedin(e.target.value)} point_label={(<span className='text text-red-500'>*</span>)} dis={editform}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'Facebook'} placeholder="https://www.facebook.com/xxx" values={fb} on_change={e=>inputFb(e.target.value)} dis={editform}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'Twitter'} placeholder="https://twitter.com/xxx" values={twitter} on_change={e=>inputTwitter(e.target.value)} dis={editform}/>
                    </div>
                    <div className="mb-3 md:w-full">
                        <Inputs lables={'Instagram'} placeholder="https://www.instagram.com/xxx" values={instagram} on_change={e=>inputInstagram(e.target.value)} dis={editform}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DataKontak