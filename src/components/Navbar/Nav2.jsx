import React, { useState } from 'react'

// Icons
import { FaChevronLeft } from 'react-icons/fa';

const Nav2 = ({toggle}) => {
    const [tog, setToggle] = useState(toggle)
    return (
        <div className=' items-center flex justify-center bg-white text-colorv3Bodies4 rounded-full cursor-pointer' onClick={()=>(setToggle(!toggle))}>
            <FaChevronLeft className={`${tog ? 'rotate-180' : 'rotate-0'} text-3xl transition duration-1000 ease-in-out p-1`} />
        </div>
    )
}

export default Nav2