import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const toogle = () => {
        setMenu(!menu);
    }

    const links = ["resume", "skills", "projects", "contact"];

    return (
        <nav className='flex rounded-md justify-between fixed z-50 lg:top-2 bg-zinc-800/20 backdrop-blur-lg w-full left-0 right-0 items-center max-w-screen-xl px-5 md:px-10 py-4 mx-auto'>
            <img src={logo} className='w-10' />
            {/* <IoMenu className='h-7 w-7 block lg:hidden cursor-pointer'/> */}
            <CiMenuFries onClick={toogle} className='h-5 w-5 md:h-7 md:w-7 block text-white lg:hidden cursor-pointer' />
            {
                menu && (
                    <ul className='flex lg:hidden z-50 flex-col text-sm sm:text-base justify-center items-center rounded-md gap-y-5 w-40 sm:w-52 bg-black/20 backdrop-blur-lg px-10 py-4 absolute right-5 top-16 md:top-20'>
                        {links.map((link, index) => (
                            <li key={index} className='animateBorder cursor-pointer relative'>
                                <a href={`#${link}`} className='capitalize'>{link}</a>
                            </li>
                        ))}
                    </ul>
                )
            }

            <ul className='hidden lg:flex items-center gap-10'>
                {links.map((link, index) => (
                    <li key={index} className='animateBorder cursor-pointer relative'>
                        <a href={`#${link}`} className='capitalize'>{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;