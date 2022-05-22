import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';


const Navbar = ({ darkMode, setDarkMode }) => {

    return (
        <div>
            <Link to="/home" >Home</Link>
            <Link to="/blog">Blog</Link>
         
            <label class="swap swap-rotate">
           
           {
                darkMode?<> <input type="checkbox"  onClick={()=> setDarkMode(!darkMode)}/><SunIcon className='swap-off h-5 w-5' ></SunIcon> 
              <MoonIcon className='swap-on h-5 w-5'></MoonIcon></>
                :<><input type="checkbox"  onClick={()=> setDarkMode(!darkMode)}/><SunIcon className='swap-on h-5 w-5' ></SunIcon> 
                <MoonIcon className='swap-off h-5 w-5'></MoonIcon></>
           }
               </label>
        </div>
    );
};

export default Navbar;