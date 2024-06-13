import React, {useEffect, useState} from 'react'

import foto from '../../../assets/teacher2.png'

const SidebarProfile = ({toggle}) => {
    const [name, getName] = useState('');
    const [email, getEmail] = useState('');

    useEffect(() => {
        function getSessions(){
            const load = JSON.parse(localStorage.getItem('user'))
            if (load) {
                const roles = load.data.user.role_user;
                getName(load.data.user.nama_lengkap)
                getEmail(load.data.user.email)
            } else {
                getName('')
                getEmail('')
            }
        }
        getSessions();
    }, [])

    return (
        <div className={`flex gap-5 items-center ${toggle ? 'bg-none duration-500 delay-300 justify-center' : 'bg-white rounded-xl p-2'} transition-all`}>
            <div className={'min-w-[3.5rem] h-[3.5rem]'}>
                <img src={foto} alt={"Orang"} className={`w-full h-full rounded-full`} />
            </div>
            <div className={`${toggle ? 'opacity-0 hidden delay-500' : 'delay-500'} transition-all`}>
                <h3 className='text-base font-bold'>{name}</h3>
                <span className='text-[0.75rem] opacity-60'>{email}</span>
            </div>
        </div>
    )
}

export default SidebarProfile