import React from 'react'

// Components
import SideBars from '../../Components/SideBars'
import CompFormal from './component/CompFormal'
import Navbar3 from '../../../../../components/Navbar/Navbar3'
import NavBars from '../../Components/NavBars'
import Footer2 from '../../../../../components/Footer/Footer2'
import Footer3 from '../../../../../components/Footer/Footer3'

const PendidikanFormal = () => {
    return (
        <div className='overflow-y-hidden bg-[#F9F7FA]'>
            {/* <Navbar3/> */}
            {/* <NavBars/> */}
            <div className=' flex justify-between mt-20'>
                {/* <SideBars/> */}
                <CompFormal/>
            </div>
            <Footer2/>
            <Footer3/>
        </div>
    )
}

export default PendidikanFormal