import React from 'react'
import Navbar3 from '../../../../components/Navbar/Navbar3'
import VacancyHome from './Component/VacancyHome'
import Footer2 from '../../../../components/Footer/Footer2'
import Footer3 from '../../../../components/Footer/Footer3'

const Lowongan = () => {
  return (
    <div className='overflow-y-hidden bg-[#F9F7FA]'>
        <Navbar3/>
        <VacancyHome/>
        {/* <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 md:my-8' /> */}
        <Footer2/>
        <Footer3/>
    </div>
  )
}

export default Lowongan