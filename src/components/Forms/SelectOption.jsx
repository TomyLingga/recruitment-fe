import React from 'react'

const SelectOption = ({lables, placeholder, values, on_change, Options, dis=false, point_label}) => {
  // console.log(values);
  return (
    <div className="mb-6 text-left">
        <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">{lables} {point_label}</label>
        <select
        // defaultValue={values}
        value={values || ''}
        onInput={on_change}
        disabled={dis}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded block w-full p-2.5 focus:border disabled:bg-slate-200 focus:border-gray-300 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-900 dark:text-gray-900">
            {Options.map((ops)=> {
                return(<option key={ops.id} value={ops.value} disabled={ops.disabled}>{ops.title}</option>)
            })}
        </select>
    </div>
  )
}

export default SelectOption