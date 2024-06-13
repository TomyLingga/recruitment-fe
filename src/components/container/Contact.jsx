import React from 'react'
import { motion } from "framer-motion";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
        <span className=" text-colorBodies3">Hubungi</span> Kami
        </div>
        <p className="text-sm leading-7 text-gray">
          Jika ada pertanyaan lebih lanjut, silahkan ajukan pertanyaan dibawah ini.
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5 space-y-4"
        >
          <div className='space-x-4'>
            <input
              type="text"
              placeholder="Masukan nama anda"
              className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
            />
            <input
              type="email"
              placeholder="Masukan alamat email anda"
              className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
            />
          </div>
          <div className='text-left p-1'>
            <textarea 
            name="pertanyaan" 
            id="pertanyaan" 
            cols="30" 
            rows="5" 
            placeholder="Ajukan pertanyaan"
            className='md:p-3 p-2 outline-none text-sm shadow-md md:w-full w-60'></textarea>
          </div>
          <div>
            <button className="text-sm text-white bg-colorBodies3 sm:p-3 p-2 shadow-md font-bold flex mx-auto">
              <span className='text-xl mr-2'><RiSendPlaneFill/></span> Kirim
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
