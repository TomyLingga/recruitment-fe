import React from 'react'
import {FaRegFrown} from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className='p-3 font-Poppins h-[100vh]'>
        {/* <div className=' my-auto'>
            <span className='text-xl'>tests</span>
        </div> */}
        <div className='mt-10'>
            <div className='flex w-full items-center justify-center text-center'>
                <FaRegFrown className=' text-3xl'/>
            </div>
            <div className='flex w-full items-center justify-center text-center'>
                <span className=' text-center font-semibold text-9xl'>404</span>
            </div>
            <div className='flex w-full items-center justify-center text-center'>
                <span className=' text-center font-semibold text-2xl'>Not Found</span>
            </div>
            <div className='flex w-full items-center justify-center text-center'>
                <a href="/" className='px-2 py-1 border border-solid border-gray-500 rounded-md shadow-none hover:shadow-md transition-all'>Back</a>
            </div>
        </div>
    </div>
  )
}

export default NotFound