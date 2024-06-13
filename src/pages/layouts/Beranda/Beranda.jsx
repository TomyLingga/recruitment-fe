import React from 'react'
import { About, Navbar5, Course, Contact, Footer, Teacher } from '../../../components';
import Homes from './Homes'
import RunningText from './RunningText'
import Apply from './Apply';
import './style.css';

const Beranda = () => {
  return (
    <div className="font-Poppins bg-[#EAF2F8]">
      <Navbar5/>
      <RunningText/>
      <Homes/>
      <About/>
      <Apply/>
      <Course/>
      <Teacher/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Beranda