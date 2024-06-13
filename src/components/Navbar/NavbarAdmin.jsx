import React from 'react'

const NavbarAdmin = ({toggle, component}) => {
    return (
        <div className='w-full px-5 py-6'>
            <div className='py-3 px-5 bg-slate-500 rounded-lg flex justify-between font-bold items-center text-white shadow-md'>
                <div className='flex justify-start items-center space-x-3'>
                    {component}
                    <span><span className='font-normal'>RECRUITMENT</span> - PT. Industri Nabati Lestari</span>
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin