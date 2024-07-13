import React from 'react';
import { HiOutlineDownload } from "react-icons/hi";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='overflow-hidden' id="resume">
      {/* <Background /> */}
      <div className='relative min-h-screen min-w-full'>
        <div className="absolute w-[222px] h-[208px] sm:w-[322px] sm:h-[308px] rounded-full bg-gradient-to-r from-purple-700 to-purple-900/30 blur-3xl -right-5 -top-5 z-[-1]"></div>
      </div>

      <div className='z-10 w-full h-screen top-40 absolute'>
        <div className='max-w-screen-xl px-5 md:px-10 py-5 md:py-10 mt-20 mx-auto'>
          <div className='text-center'>
            <h3 className='text-xl font-thin sm:text-4xl'>I am Lavlesh</h3>
            <h1 className='text-4xl sm:text-6xl bg-gradient-to-tr from-purple-900 via-purple-800 to-white bg-clip-text text-transparent font-[gilroy] leading-tight mt-2 md:mt-6'>A Visionary Web Developer</h1>
            <p className='text-xs md:text-base max-w-[500px] mx-auto w-full mt-2 md:mt-10'>A passionate and innovative web developer with a knack for creating dynamic and user-friendly web applications</p>

            <div className='flex sm:scale-100 scale-75 gap-x-5 justify-center mt-16 items-center'>
              <a download={"/public/my_resume.pdf"} target='__blank' href="./public/my_resume.pdf" className='hover:bg-purple-700 min-w-fit border border-purple-700 transition-all text-white px-12 bg-transparent py-4 rounded-full flex items-center gap-x-1'>Download CV <HiOutlineDownload className='w-5 h-5' /></a>
              <a
                href='https://github.com/lavleshdubey90' target="__blank"
                className="rounded-full transition-all cursor-pointer hover:bg-purple-700 grid place-content-center border hover:text-white text-purple-700 border-purple-700">
                <DiGithubBadge className='w-10 h-10 transition-all' />
              </a>
              <a
                href='https://linkedin.com/in/lavlesh-dubey-4092662b2' target='__blank'
                className="rounded-full transition-all cursor-pointer hover:bg-purple-700 grid place-content-center border hover:text-white text-purple-700 border-purple-700">
                <FaLinkedinIn className='w-10 h-10 p-2' />
              </a>
            </div>
          </div>

          <div className='relative min-h-screen min-w-full'>
            <div className="absolute w-[222px] h-[208px] sm:w-[322px] sm:h-[308px] rounded-full bg-gradient-to-br from-purple-700 to-purple-900/30 blur-3xl left-0 sm:-top-20 z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;