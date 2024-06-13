import React, { useEffect, useState } from 'react'
import { FaSave,  FaPlus, FaEdit } from 'react-icons/fa';

// Components
import Inputs from '../../../../../../components/Forms/Inputs';

const CompKontak = () => {

    // Variable
    const [no_hp, inputNoHp] = useState('')
    const [no_telepon, inputNoTelp] = useState('')
    const [no_wa, inputNoWa] = useState('')
    const [no_telegram, inputNoTelegram] = useState('')
    const [linkedin, inputLinkedin] = useState('')
    const [fb, inputFb] = useState('')
    const [twitter, inputTwitter] = useState('')
    const [instagram, inputInstagram] = useState('')

    return (
        <div className=' bg-transparent mr-10 w-[170vh]'>
            <div className='py-8'>
                <div className='px-5 py-6 bg-white rounded-md md:space-y-5 shadow-lg'>
                    <div>
                        <span className='text-2xl font-semibold'>DATA PELAMAR</span>
                    </div>
                    <div className='border py-8 rounded-md'>
                        <div className='px-12 mb-4 flex items-center justify-between'>
                            <div className=' justify-start'>
                                <span className='font-bold'>Kontak</span>
                            </div>
                            <div className=' justify-end'>
                                <button className=' font-medium border border-solid border-blue-500 text-blue-500 bg-white hover:bg-blue-500 hover:text-white px-3 py-2 text-xs flex items-center'><FaSave className='mr-2'/> Simpan</button>
                            </div>
                        </div>
                        <form>
                            <div className="md:flex justify-center md:space-x-4 md:w-11/12 mx-auto">
                                <div className="mb-3 md:w-full">
                                    <Inputs lables={'No.HP'} placeholder="08xx" values={no_hp} on_change={e=>inputNoHp(e.target.value)}/>
                                </div>
                                <div className="mb-3 md:w-full">
                                    <Inputs lables={'No Telpon'} placeholder="08xx" values={no_telepon} on_change={e=>inputNoTelp(e.target.value)}/>
                                </div>
                                <div className="mb-3 md:w-full">
                                    <Inputs lables={'No WhatsApp'} placeholder="08xx" values={no_wa} on_change={e=>inputNoWa(e.target.value)}/>
                                </div>
                                <div className="mb-3 md:w-full">
                                    <Inputs lables={'No Telegram'} placeholder="08xx" values={no_telegram} on_change={e=>inputNoTelegram(e.target.value)}/>
                                </div>
                            </div>
                            <div className="md:flex justify-center md:space-x-4 md:w-11/12 mx-auto">
                                <div className="mb-3 md:w-full">
                                    <Inputs lables={'LinkedIn'} placeholder="08xx" values={no_hp} on_change={e=>inputNoHp(e.target.value)}/>
                                </div>
                                <div className="mb-3 md:w-full">
                                    <Inputs lables={'No Telpon'} placeholder="08xx" values={no_telepon} on_change={e=>inputNoTelp(e.target.value)}/>
                                </div>
                                <div className="mb-3 md:w-full">
                                    <Inputs lables={'No WhatsApp'} placeholder="08xx" values={no_wa} on_change={e=>inputNoWa(e.target.value)}/>
                                </div>
                                <div className="mb-3 md:w-full">
                                    <Inputs lables={'No Telegram'} placeholder="08xx" values={no_telegram} on_change={e=>inputNoTelegram(e.target.value)}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompKontak