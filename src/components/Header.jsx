import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa';

const Header = ({search, handleSubmit, handleChange}) => {
  return (
    <div className='bg-zinc-900 text-gray-200 flex flex-wrap flex-row md:flex-row justify-start items-center header'>
      <FaSearch />
      <input type="text" value={search} onChange={(e) => handleSubmit(e.target.value)} placeholder='What do you want to listen to?' />
        <nav className='flex items-center'>
            <a>Sign up</a>
            <a><button className='bg-gray-200 text-gray-900'>Log in</button></a>
        </nav>
    </div>
  )
}

export default Header