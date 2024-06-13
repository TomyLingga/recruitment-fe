import React from 'react'

const Inputs = ({lables, placeholder, values, on_change, dis, type='text', point_label }) => {
    return (
        <div className="mb-6 text-left">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">{lables} {point_label}</label>
            <input 
            type={type} 
            value={values}
            className="bg-transparent border border-gray-300 text-xs rounded w-full p-2 disabled:bg-slate-200 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-900 dark:text-gray-900 " 
            placeholder={placeholder} 
            onChange = {on_change}
            disabled={dis}
            required/>
        </div>
    )
}

export default Inputs