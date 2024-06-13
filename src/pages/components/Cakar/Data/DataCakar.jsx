import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

// Icons
import { FaChevronLeft } from 'react-icons/fa';

// Components
import SideBar from '../../../../components/Sidebar/New/SideBar';
import NavbarAdmin from '../../../../components/Navbar/NavbarAdmin';
import DataBodyCakar from './DataBodyCakar';

const DataCakar = () => {
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate();

    function Nav2(){
        return (
            <div className=' items-center flex justify-center bg-white text-colorv3Bodies4 rounded-full cursor-pointer' onClick={()=>(setToggle(!toggle))}>
                <FaChevronLeft className={`${toggle ? 'rotate-180' : 'rotate-0'} text-3xl transition duration-1000 ease-in-out p-1`} />
            </div>
        )
    }
    
    useEffect(() => {
        function getAuth(){
            const load = JSON.parse(localStorage.getItem('user'))
            if (load) {
                const roles = load.data.user.role_user;
                if (roles === '2') {
                    navigate('/datadiri')
                } else {
                    navigate(-1)
                }
            } else {
                navigate('/login')
            }
        }
        getAuth();
    }, [])
    return (
        <div className='flex w-full h-screen bg-slate-200'>
            <div className='bg-[#F8F9F9] w-full'>
                <SideBar toggle={toggle}/>
                <div className={`${toggle ? 'ml-[8%]' : 'ml-[20%]'} bg-transparent transition-all duration-500`}>
                    <NavbarAdmin toggle={toggle} component={<Nav2/>}/>
                    <DataBodyCakar/>
                </div>
            </div>
        </div>
    )
}

export default DataCakar