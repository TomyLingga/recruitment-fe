import React from 'react'
import CompKontak from './component/CompKontak'
import Navbar3 from '../../../../../components/Navbar/Navbar3'
import SideBars from '../../Components/SideBars'
import Footer2 from '../../../../../components/Footer/Footer2'

const Kontak = () => {
  return (
    <div className='overflow-y-hidden bg-[#F9F7FA]'>
        <Navbar3/>
        <div className='flex justify-between mt-10 mb-5'>
                <SideBars/>
                <CompKontak/>
            </div>
        <Footer2/>
    </div>
  )
}

export default Kontak