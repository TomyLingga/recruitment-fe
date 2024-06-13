import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

// Icons
import { FaHome, FaClipboardList, FaSignOutAlt, FaSearch, FaFileAlt } from 'react-icons/fa'

const SidebarData = ({toggle}) => {
    const [role, getRole] = useState('');
    const navigate = useNavigate();

    // Logout
    function logOut(){
        localStorage.removeItem('user')
        navigate('/login')
    }
    // Links
    const Links = [
        {id:1, name:'Home', href:'/home', icons:<FaHome/>},
        {id:2, name:'Data Pelamar', href:'/datapelamar', icons:<FaClipboardList/>},
    ]
    const LinkCakar = [
        {id:1, name:'Home', href:'/dash', icons:<FaHome/>},
        {id:2, name:'Data Pribadi', href:'/datadiri', icons:<FaClipboardList/>},
        {id:3, name:'Data Pendukung', href:'/datapendukung', icons:<FaFileAlt/>},
        {id:4, name:'Lowongan', href:'/lowongan', icons:<FaSearch/>},
    ]

    useEffect(() => {
        function getLinks(){
            const load = JSON.parse(localStorage.getItem('user'))
            if (load) {
                const roles = load.data.user.role_user;
                getRole(roles)
            } else {
                getRole('')
            }
        }
        getLinks();
    }, [])

    return (
        <div className={``}>
            { role === '1' ?
                Links.map((data) => {
                    return(
                        <div className={`${toggle ? '' : ''} sidebar left-4 bottom-4`} key={data.id}>
                            <div className={`${toggle ? 'mx-auto' : 'mr-6 '} text-[1.2rem] text-brown`}>{data.icons}</div>
                            <button href={data.href} className={`${toggle ? 'opacity-0 delay-200 hidden' : 'text-brown whitespace-pre text-[0.8rem]'}`}>{data.name}</button>
                        </div>
                    )
                })
                : LinkCakar.map((data) => {
                    return(
                        <div className={`${toggle ? '' : ''} sidebar left-4 bottom-4`} key={data.id} onClick={()=>{navigate(data.href)}}>
                            <div className={`${toggle ? 'mx-auto' : 'mr-6 '} text-[1.2rem] text-brown`}>{data.icons}</div>
                            <button href={data.href} className={`${toggle ? 'opacity-0 delay-200 hidden' : 'text-brown whitespace-pre text-[0.8rem]'}`}>{data.name}</button>
                        </div>
                    )
                })
            }
            {/* <hr className='border border-gray-50 my-5 w-full' /> */}
            <div className={`${toggle ? '' : ''} sidebar left-4 bottom-4 absolute`} onClick={logOut}>
                <div className={`${toggle ? 'mx-auto' : 'mr-6 '} text-[1.2rem] text-brown`}><FaSignOutAlt/></div>
                <button className={`${toggle ? 'opacity-0 delay-200 hidden' : 'text-brown whitespace-pre text-[0.8rem]'}`}>Log Out</button>
            </div>
        </div>
    )
}

export default SidebarData