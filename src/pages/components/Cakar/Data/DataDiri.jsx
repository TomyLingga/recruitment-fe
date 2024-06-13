import React from 'react'
import DataPribadi from './component/DataPribadi'
import SideBars from '../Components/SideBars'
import Navbar3 from '../../../../components/Navbar/Navbar3'
import Footer2 from '../../../../components/Footer/Footer2'
import Footer3 from '../../../../components/Footer/Footer3'

const DataDiri = () => {
    return (
        <div className='overflow-y-hidden bg-[#F9F7FA]'>
            <Navbar3/>
            <div className='flex justify-between mt-10 mb-5'>
                <SideBars/>
                <DataPribadi/>
            </div>
            <Footer2/>
        </div>
    )
}

export default DataDiri