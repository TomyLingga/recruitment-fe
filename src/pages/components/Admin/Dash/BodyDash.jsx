import React, {useState} from 'react'

// Icons
import { FaUserTie, FaPhoneAlt, FaHouseUser } from 'react-icons/fa';

const BodyDash = ({toggle}) => {
    const [openTab, setOpenTab] = useState(1);

    const linkTab = [
        {id: 1, link: 'Data Pribadi', icons:<FaUserTie/>},
        {id: 2, link: 'Kontak', icons:<FaPhoneAlt/>},
        {id: 3, link: 'Alamat', icons:<FaHouseUser/>},
    ];

    return (
        <div>
            <div className='w-full px-5 py-3 h-screen text-sm'>
                <div className='py-6 px-5 bg-white rounded-lg shadow-md space-y-3'>
                    <div className={`w-full flex items-stretch justify-between border-b border-solid border-slate-300`}>
                        <div className={`py-2`}>
                            <h3 className='text-2xl'>Data Pribadi</h3>
                        </div>
                        <div className={`flex`}>
                            <ul className={`flex space-x-2 font-semibold`}>
                                {linkTab.map((links) => {
                                    return (<li key={links.id} className={`${openTab === links.id ? 'border-b-2 border-solid border-blue-400 text-blue-400 bottom-0' : ''} py-2 px-3 transition-all duration-300 ease-in-out cursor-pointer gap-2 flex items-center`} onClick={() => setOpenTab(links.id)}>{links.icons} {links.link}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={`grid grid-cols-3`}>
                        {/* <Selects/>
                        <Input label={`Test`}/>
                        <Buttons label={`Save`}/>
                        <Buttons label={`Save`}/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyDash