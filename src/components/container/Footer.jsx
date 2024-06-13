import React from 'react'
import './style.css'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { FaMapMarkerAlt, FaIndustry, FaBuilding, FaGlobe } from 'react-icons/fa';
import { motion } from "framer-motion";
import n3 from '../../assets/n3.png';
import n4 from '../../assets/n4.png';

const Footer = () => {
  return (
    // <motion.div
    //   initial={{ height: 0 }}
    //   whileInView={{ height: "auto" }}
    //   transition={{ duration: 1 }}
    //   className=" border-t-2 border-solid border-colorBodies3 p-10"
    // >
    <section className='mb-9'>
      <div className="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-colorBodies3 p-10 bg-white">
        <div>
          <div className="font-bold mb-6">Subdiary :</div>
          <div className='grid xs:grid-cols-3 items-center justify-center'>
            <img src={n3} className='n3' alt="" />
            <img src={n4} className='n4 ml-5' alt="" />
          </div>
          {/* <div>
          </div> */}
          {/* <p className="text-sm leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque
            saepe cumque. Veritatis sunt commodi
          </p> */}
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <span className="text-sm hover:underline inline-flex justify-center">
              <FaIndustry className='mr-2 text-3xl'/>Kawasan Ekonomi Khusus, Sei Mangkei Kav 2-3 Kabupaten Bosar Maligas , Simalungun Sumatera Utara 21184 Indonesia..
            </span>
            <span className="text-sm hover:underline inline-flex justify-center">
              <FaBuilding className='mr-2 text-3xl'/>Jl. Iskandarmuda No. 115 Medan Petisah Regency. Medan, Sumatera Utara, Indonesia.
            </span>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <div className="font-bold mb-3">Contact</div>
          <div className="text-sm mb-2">cs@inl.co.id</div>
          <div className="text-sm">+62 622 7297252</div>
          <div className="text-sm">+62 622 7297253</div>
          <div className="text-sm">+62 61 88816951</div>
          <div className="flex gap-4 mt-4">
            <a href="https://inl.co.id/" className="hover:scale-110 text-xl">
              <FaGlobe />
            </a>
            <a href="https://www.instagram.com/industrinabati/" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            {/* <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a> */}
          </div>
        </div>
      </div>
      <div className=' bg-black w-full py-3 px-10 text-white'>
        <span className='font-thin text-sm'>Copyright &copy; 2023 ICT Development - PT. Industri Nabati Lestari</span>
      </div>
      </section>
    // </motion.div>
  )
}

export default Footer
