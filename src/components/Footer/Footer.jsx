import React from 'react'
import {FaInstagram, FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-gray-500 text-white border-t border-gray-200 shadow text-center md:flex md:items-center md:justify-between md:px-10">
                <span className="text-sm sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">ICT DEV</a> -  PT. Industri Nabati Lestari.
                </span>
                <ul className="flex items-center justify-center mt-3 text-sm md:mt-0 space-x-5">
                    <li>
                        <span className='text-xs italic'>Subdiary :</span>
                    </li>
                    <li>
                        <img src="img/n3-white.png" alt="PTPN 3" className='h-9 w-15' />
                        {/* <a href="#" className="mr-4 hover:underline md:mr-6 "><FaInstagram/></a> */}
                    </li>
                    <li>
                        <img src="img/n4-white.png" alt="PTPN 3" className='h-12 w-15' />
                        {/* <a href="#" className="mr-4 hover:underline md:mr-6"><FaFacebookSquare/></a> */}
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer