import React, {useState, useEffect} from 'react'
import { Link, useNavigate, Navigate  } from "react-router-dom";
import { FaHome, FaSignOutAlt, FaSearch } from 'react-icons/fa';

// Images
import inlLogo from '../../../../assets/inl.png';

const NavBars = () => {
    const navigate = useNavigate();

    // Link
    function dashboard() {
        navigate('/dash')
    }
    function vacancy() {
        navigate('/vacancy')
    }

    const [active, setActive] = useState(null);
    useEffect(() => {
        const scrollActive = () => {
        setActive(window.scrollY > 40);
        };
        window.addEventListener("scroll", scrollActive);
        return () => window.removeEventListener("scroll", scrollActive);
    }, [active]);

    return (
        <div className={` fixed px-4 w-full`}>
            <div className={`${active ? 'bg-white/10 backdrop-blur-sm transition-colors' : 'bg-transparent transition-colors'} items-center justify-center flex space-x-8 mx-auto w-7/12 rounded-md`}>
                <div className='px-4 py-2 items-center text-[#5589aa] bg-transparent rounded-none transition-none hover:text-[#64adda] hover:transition-all hover:rounded-md' onClick={dashboard}>
                    <div className=''>
                        <FaHome className='mx-auto'/>
                    </div>
                    <div>
                        <a href="#" className='text-sm'>Beranda</a>
                    </div>
                </div>
                <div className='text-center rounded-full h-16 w-24 items-center py-4 px-2 '>
                    <img src={inlLogo} alt="PT Industri Nabati Lestari" className='w-16 mx-auto' />
                </div>
                <div className='px-4 py-2 items-center text-[#5589aa] bg-transparent rounded-none transition-none hover:text-[#64adda] hover:transition-all hover:rounded-md' onClick={vacancy}>
                    <div className=''>
                        <FaSearch className='mx-auto'/>
                    </div>
                    <button type='button'>
                        <a href="#" className='text-sm'>Lowongan</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBars