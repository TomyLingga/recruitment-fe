import React from 'react'

// Components
import SidebarProfile from './SidebarProfile'
import SidebarData from './SidebarData'

const SideBar = ({toggle, component}) => {
    return (
        <div className={`${toggle ? 'w-[8%]' : 'w-[20%]'} bg-colorv3Bodies4 fixed px-5 py-6 h-screen transition-all duration-500`}>
            <div className='sidebar-container'>
                <SidebarProfile toggle={toggle}/>
                <hr className='border border-solid border-white my-5 w-full' />
                <SidebarData toggle={toggle}/>
            </div>
        </div>
    )
}

export default SideBar