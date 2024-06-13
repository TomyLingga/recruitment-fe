import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "./store/useAuth";

// Icons
import {FaEye, FaEyeSlash} from 'react-icons/fa'

// Component
import Modal_Login from '../components/Modal/Modal_Login';

// Axios
import axios from "axios";

// CSS
import './login.css'

const Login = () => {
    const {setAuth} = useAuth();
    
    const useNavigations = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const userRef = useRef();
    const errRef = useRef();

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // Variable Input
    const [email,emailUpdate] = useState('');
    const [password,passwordUpdate] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [roles, setRole] = useState(null);

    // Show Hide Password
    const [typePassword, setTypePassword] = useState(true);
    function showHidePassword() {
        setTypePassword(!typePassword);
    }

    // Modal Variable
    const [loads,loadsModal] = useState(false);
    const [judul,judulModal] = useState('');

    // Execute Login
    const ProcessLogin = async (e) => {
        e.preventDefault();
        if ((email === '' || email === null) && (password === '' || password === null)) {
            loadsModal(true);
            judulModal('Please, Enter your credential !');
        } else {
            if (email === '' || email === null) {
                loadsModal(true);
                judulModal('Please, Enter your email !');
            } else if (password === '' || password === null) {
                loadsModal(true);
                judulModal('Please, Enter your password !');
            } else {
                try {
                    const response = await axios.post('http://localhost:8000/api/login',{email, password});
                    // console.log(response.data);
                    const accessToken = response.data.data.accessToken;
                    // const accessToken = response?.data?.data?.accessToken;
                    const role = response.data.data.user.role_user;
                    localStorage.setItem("user", JSON.stringify(response.data));
                    if (role === '2') {
                        useNavigations('/dash');
                    } else {
                        useNavigations('/home');
                    }
                } catch (error) {
                    setErrMsg('No Server Response');
                    console.log(errMsg);
                }
            }
        }
    }

    // function getToken(){
    //     const tok = JSON.parse(localStorage.getItem('user'))
    //     console.log(tok)
    //     // console.log(navigate())
    //     if (tok === null) {
    //         useNavigations('/login')
    //     } 
    //     else {
    //         useNavigations(-1)
    //     }
    // }

    useEffect(() => {
        // getToken();
    }, [])

    return (
        <div className='flex min-h-full items-center justify-center py-28 px-4 sm:px-6 lg:px-8 bgRegister'>
            <div className="w-full max-w-md space-y-6 py-8 px-8 rounded-md bg-white shadow-md">
                <div>
                    <img src="./img/inl.png" alt="Your Company" className="mx-auto h-20 w-auto" />
                    <h6 className=" text-center text-xl tracking-tight text-gray-500">Sign in to your account</h6>
                </div>
                <form className="mt-4 space-y-8" onSubmit={ProcessLogin}>
                    <input type="hidden" name="remember" value="true"/>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div className='my-3 relative'>
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-400 sm:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email-address"
                                autoComplete="email"
                                className="block w-full rounded-md border border-gray-400 pl-10 pr-12 text-gray-500 focus:border-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
                                placeholder="Email address"
                                value={email}
                                onChange={e=>emailUpdate(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                            </div>
                            {/* <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-md border border-gray-400 px-3 py-2 text-gray-500 placeholder-gray-300 focus:z-10 focus:border-2 focus:border-Teal focus:outline-none focus:ring-Teal sm:text-sm" placeholder="Email address"/> */}
                        </div>
                        <div className='my-3 relative'>
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-400 sm:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                    </svg>
                                </span>
                            </div>
                            <input
                                type={typePassword ? 'password' : 'text'}
                                name="password"
                                id="password"
                                autoComplete="current-password"
                                className="block w-full rounded-md border border-gray-400 pl-10 pr-12 text-gray-500 focus:border-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
                                placeholder="Password"
                                value={password}
                                onChange={e=>passwordUpdate(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <button className='sm:text-sm py-2 px-4 text-gray-500' type='button' onClick={()=> showHidePassword()}>
                                    {
                                        typePassword ? 
                                        (
                                            // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            // <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            // <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            // </svg>
                                            <FaEyeSlash className="w-6 h-6"/>
                                        ):(
                                            <FaEye className="w-6 h-6"/>
                                            // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            // <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            // </svg>
                                        )
                                    }
                                </button>
                            </div>
                            {/* <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-md border border-gray-400 px-3 py-2 text-gray-500 placeholder-gray-300 focus:z-10 focus:border-2 focus:border-Teal focus:outline-none focus:ring-Teal sm:text-sm" placeholder="Password"/> */}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm">
                            <a href="#" className="font-medium  text-red-600 hover:text-red-400">Forgot your password?</a>
                        </div>

                        <div className="text-sm">
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-400">Back to Home</a>
                        </div>
                    </div>
                    <div className='grid grid-flow-col grid-rows-1 grid-cols-2 gap-8'>
                        <button type="submit" className="group relative flex w-full justify-center items-center rounded-md border-transparent bg-white py-2 px-4 text-sm font-medium text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Sign In</button>
                        {/* <a href='/dash' className="group relative flex w-full justify-center items-center rounded-md border-transparent bg-white py-2 px-4 text-sm font-medium text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign In</a> */}
                        <a href='/register' className="group relative flex w-full justify-center text-center rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-500 border-2 border-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            Register Now
                        </a>
                    </div>
                    <div>
                    </div>
                    {loads ? 
                        (<Modal_Login cond={loads} conds ={loadsModal} title={judul}/>) : null
                    }
                    
                    <div className='my-4 text-center'>
                        <span className="text-sm text-gray-400">&copy; 2023 - PT. Industri Nabati Lestari</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
