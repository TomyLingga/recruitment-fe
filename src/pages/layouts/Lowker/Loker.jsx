import React from 'react'
import { Navbar5, Footer } from '../../../components'
import Navbar2 from '../../../components/Navbar/Navbar2'
import Body_loker from './Body_loker'
import RunningText from '../Beranda/RunningText'

const Loker = () => {
  return (
    <div className="font-Poppins bg-[#EAF2F8]">
        <Navbar2/>
        <RunningText/>
        <Body_loker/>
        <Footer/>
    </div>
  )
}

export default Loker