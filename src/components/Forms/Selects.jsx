import React from 'react'

import Select from 'react-select'

const Selects = ({ lables, isSearchable, option, isClearable, placeholder, point_label, value, onChange }) => {
    const optionAgama = [
        {value:'islam', label:'Islam'},
    ];
    return (
        <div className="mb-6 text-left">
            <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">{lables} {point_label}</label>
            {/* <Select
            className='basic-single'
            classNamePrefix='select'
            isSearchable={isSearchable}
            option={optionAgama}
            defaultValue={optionAgama[0]}
            isClearable={isClearable}
            onChange={onChange}
            /> */}
            <Select
            className='basic-single'
            option={optionAgama}
            />
        </div>
    )
}

export default Selects