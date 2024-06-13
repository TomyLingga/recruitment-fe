import React from 'react'

const LinkCakar = ({href, link}) => {
  return (
    <li className='list-none cursor-pointer mr-8'>
        <a href={href} className='font-semibold transition-all duration-300 text-sm text-colorBodies hover:text-white hover:font-bold'>{link}</a>
    </li>
  )
}

export default LinkCakar