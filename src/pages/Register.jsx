import React, { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import './login.css'

// Axios
import axios from 'axios';

const Register = () => {
    // Variable
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nik, setNik] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [role, setRole] = useState('1');
    const [status, setStatus] = useState('1');
    const [msg, setMsg] = useState('');

    const history = useNavigate();

    // ShowHide Variable
    const [typePassword, setTypePassword] = useState(true);
    const [typeRePassword, setReTypePassword] = useState(true);

    function showHidePassword() {
        setTypePassword(!typePassword);
    }

    function showHideRePassword() {
        setReTypePassword(!typeRePassword);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    // Submit Data
    const Registers = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/register', {
                name: name,
                email: email,
                nik: nik,
                password: password,
                role: role,
                status: status
            }).then((res) => {
                const data = res.data;
                console.log(data.data);
                if (data.data === null) {
                    if (data.nik.length > 0 ) {
                        setMsg(data.nik[0]);
                        console.log(msg);
                        console.log(data.nik.length);
                    }
                    if (data.password.length > 0 ) {
                        setMsg(data.password[0]);
                        console.log(data.password[0]);
                    }
                } else {
                    history('/login');
                }
            });
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }
    return (
        <div className='flex min-h-full items-center justify-center py-28 px-4 sm:px-6 lg:px-8 bgRegister'>
            <div className="w-full max-w-md space-y-6 py-8 px-8 bg-white rounded-md shadow-md">
                <div>
                    <img src="./img/inl.png" alt="Your Company" className="mx-auto h-20 w-auto" />
                    <h6 className=" text-center text-sm font-bold tracking-tight text-gray-500">Register your account</h6>
                </div>
                <form className="mt-4 space-y-8" onSubmit={Registers}>
                    <input type="hidden" name="remember" value="true"/>
                    <div className="-space-y-py rounded-md shadow-sm">
                        <div className='my-3 relative'>
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-400 sm:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>
                                </span>
                            </div>
                            <input
                                type="number"
                                name="nik"
                                id="nik"
                                autoComplete='off'
                                className="block w-full rounded-md border border-gray-400 pl-10 pr-12 text-gray-500 focus:border-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
                                placeholder="Identity number / NIK"
                                value={nik}
                                onChange={e=>setNik(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="nik" className="sr-only">
                                    Identity Number
                                </label>
                            </div>
                        </div>
                        <div className='my-3 relative'>
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-400 sm:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete='off'
                                className="block w-full rounded-md border border-gray-400 pl-10 pr-12 text-gray-500 focus:border-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
                                placeholder="Your name"
                                value={name}
                                onChange={e=>setName(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                            </div>
                        </div>
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
                                autoComplete="off"
                                className="block w-full rounded-md border border-gray-400 pl-10 pr-12 text-gray-500 focus:border-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
                                placeholder="Email address"
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                            </div>
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
                                onChange={e=>setPassword(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <button className='sm:text-sm py-2 px-4 text-gray-500' type='button' onClick={()=> showHidePassword()}>
                                    {
                                        typePassword ? 
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        ):(
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        )
                                    }
                                </button>
                            </div>
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
                                type={typeRePassword ? 'password' : 'text'}
                                name="re_password"
                                id="re_password"
                                autoComplete="current-password"
                                className="block w-full rounded-md border border-gray-400 pl-10 pr-12 text-gray-500 focus:border-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm py-2 px-3"
                                placeholder="Re-password"
                                value={repassword}
                                onChange={e=>setRepassword(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="re_password" className="sr-only">
                                    Re-Password
                                </label>
                                <button className='sm:text-sm py-2 px-4 text-gray-500' type='button' onClick={()=> showHideRePassword()}>
                                    {
                                        typeRePassword ? 
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        ):(
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        )
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm">
                            <a href="#" className="font-medium text-red-600 hover:text-red-400">Forgot your password?</a>
                        </div>

                        <div className="text-sm text-right">
                            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-400">Already have an account</a>
                        </div>
                    </div>
                    <div className='gap-8'>
                        {/* <a href='/dash' className="group relative flex w-full justify-center items-center rounded-md border-transparent bg-white py-2 px-4 text-sm font-medium text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> */}
                        <button type='submit' className="group relative flex w-full justify-center rounded-md bg-Greens py-2 px-4 text-sm font-medium text-white hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Submit
                        </button>
                        {/* </a> */}
                    </div>
                    <div>
                    </div>
                    
                    <div className='my-4 text-center'>
                        <span className="text-sm text-gray-400">&copy; 2023 - PT. Industri Nabati Lestari</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register