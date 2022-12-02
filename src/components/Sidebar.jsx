import React from 'react'
import logo from '../assets/spotify.png'
import {FaHome} from 'react-icons/fa';
import {ImSearch} from 'react-icons/im';
import {BiLibrary} from 'react-icons/bi';
import {BsPlusSquareFill} from 'react-icons/bs';
import {RiHeartAddFill} from 'react-icons/ri';

const Sidebar = () => {
  return (
    <div className='sidebar bg-black'>
        <div className='aside'>
            <img src={logo} alt="logo" width='150' />
        <section>
            <ul>
                <li><FaHome />Home</li>
                <li><ImSearch />Search</li>
                <li><BiLibrary />Your Library</li>
            </ul>   
            <ul className='mt-8'>
                <li><BsPlusSquareFill />Create Playlist</li>    
                <li><RiHeartAddFill />Liked Songs</li>    
            </ul>       
        </section>
    </div>
    </div>
  )
}

export default Sidebar