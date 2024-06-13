import React from 'react'

const sideLink = ({icon, title}) => {
    return (
        <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
            <span>{icon}</span>
            <h1 className='text-gray-600 group-hover:text-black flex sm:hidden'>{title}</h1>
        </div>
    );
}

export default sideLink