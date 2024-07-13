import React from 'react';
import logo from "../assets/logo.png";

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer className='max-w-screen-xl flex flex-col sm:flex-row gap-y-4 items-center justify-between text-xs sm:text-sm py-10 px-5 mx-auto'>
        <img src={logo} alt="logo" className='w-10'/>
        <p>Copyright &copy; {year} || All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;