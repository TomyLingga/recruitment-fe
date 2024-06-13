import React, { useState } from 'react'

import jwtDecode from 'jwt-decode'

import Sidebar from '../components/Sidebar/Sidebar'
import Navbar3 from '../components/Navbar/Navbar3'
// import Navbar2 from '../components/Navbar/Navbar2'
import DashHome from './components/Cakar/Dash/DashHome'
import Footer2 from '../components/Footer/Footer2'
import Footer3 from '../components/Footer/Footer3'

const Dashboard = () => {
    // const [token, setToken] = useState('');

    // const refreshToken = async() => {
    //     try {
    //         const response = JSON.parse(localStorage.getItem('user'))
    //         setToken(response.data.accessToken);
    //         const decode = jwtDecode(response.data.accessToken);
    //     } catch (error) {
            
    //     }

    // }

    return (
        // <div className='w-full min-h-screen bg-white'>
        <div className='overflow-y-hidden bg-white'>
            <Navbar3/>
            <DashHome/>
            <Footer2/>
            <Footer3/>
        </div>
    )
}

export default Dashboard