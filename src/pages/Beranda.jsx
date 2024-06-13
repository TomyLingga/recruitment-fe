import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar4 from '../components/Navbar/Navbar4'
import { Home, About, Navbar, Navbar5, Course, Contact, Footer, Teacher } from '../components'
import Homes from './layouts/Beranda/Homes'
import RunningText from './layouts/Beranda/RunningText'
import './layouts/Beranda/style.css';

const Beranda = () => {
  // const [token, setToken] = useState('');
  // const navigate = useNavigate();

  // function getToken(){
  //   const tok = JSON.parse(localStorage.getItem('user'));
  //   console.log(navigate(-1));
  //   if (tok === null) {
  //     setToken('');
  //   } else {
  //     setToken(tok.data.accessToken);
  //   }
  // }

  // useEffect(() => {
  //   getToken();
  //   // console.log(token)
  // }, [])

  return (
    <div className="font-Poppins bg-[#EAF2F8]">
      <Navbar5/>
      <RunningText/>
      <Homes/>
      <About/>
      <Course/>
      <Teacher/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Beranda