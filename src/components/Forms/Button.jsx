import React, {useEffect, useState} from 'react'
import { FaEdit } from 'react-icons/fa'

const Button = ({icons_after, icons_before, lable, size, color, onclicks, disable=false}) => {
    // Variable
    const [sizes, setSizes] = useState('');
    const [colors, setColors] = useState('');

    const classBtn = async () => {
        // Sizes
        switch (size) {
            case 'lg':
                setSizes('text-lg')
                break;
            case 'xs':
                setSizes('text-xs')
                break;
            default:
                setSizes('text-md')
                break;
        }

        // Colors
        switch (color) {
            case 'warning-line':
                setColors('border border-solid border-colorv4Bodies2 text-colorv4Bodies2 hover:bg-colorv4Bodies2 hover:text-white bg-white disabled:border-colorv3Bodies4 disabled:bg-white disabled:text-colorv3Bodies4')
                break;
            case 'primary':
                setColors('text-white bg-blue-500 hover:bg-blue-400 hover:text-white')
                break;
            case 'primary-line':
                setColors('border border-solid border-blue-500 text-blue-500 bg-white hover:bg-blue-500 hover:text-white disabled:border-blue-300 disabled:bg-white disabled:text-blue-300')
                break;
            default:
                setColors('border border-solid border-black text-black bg-white hover:bg-black hover:text-white')
                break;
        }
    }

    useEffect(() => {
        classBtn()
    }, [])

    return (
            <button 
            className={`font-medium px-3 py-2 flex items-center ${sizes} ${colors} `}
            onClick={onclicks}
            disabled={disable}
            >{icons_before} {lable} {icons_after}</button>
    )
}

export default Button