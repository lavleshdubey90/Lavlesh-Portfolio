import React, { useState } from 'react';
import { websites, backend, fullstack } from '../assets/assets';
import Card from './Card';

const Projects = () => {

    const [active, setActive] = useState("Frontend");

  return (
    <section className='relative z-10 min-h-[800px] max-w-screen-xl mx-auto mt-80 py-20' id='projects'>
        <h2 className='text-4xl bg-gradient-to-tr from-purple-900 via-violet-400 to-white text-center bg-clip-text text-transparent font-[gilroy] leading-tight mt-2 md:mt-6'>My Projects</h2>

        <div className='w-full mt-10'>
            <ul className='w-fit mx-auto flex items-center rounded-full gap-x-5 bg-zinc-400/10 backdrop-blur-lg p-2 sm:p-3'>
                <li onClick={()=>{setActive("Frontend")}} className={`${active==="Frontend"?"bg-purple-700 duration-300":""} py-2 px-2 sm:py-2 sm:px-3 text-sm sm:text-base rounded-full cursor-pointer`}>Frontend</li>
                <li onClick={()=>{setActive("Backend")}} className={`${active==="Backend"?"bg-purple-700 duration-300":""} py-2 px-2 sm:py-2 sm:px-3 text-sm sm:text-base rounded-full cursor-pointer`}>Backend</li>
                <li onClick={()=>{setActive("Fullstack")}} className={`${active==="Fullstack"?"bg-purple-700 duration-300":""} py-2 px-2 sm:py-2 sm:px-3 text-sm sm:text-base rounded-full cursor-pointer`}>Fullstack</li>
            </ul>

            {active==="Frontend" && (<div className='skills mt-10 sm:mx-5 grid max-w-80 sm:max-w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 grid-rows-1 sm:grid-rows-3 lg:grid-rows-2 h-auto'>
                {websites.map((item, index)=>{
                    return <Card key={index} title={item.name} image={item.image} github={item.github} liveSite={item.liveSite}/>
                })}
            </div>)}

            {active==="Backend" && (
                <div className='skills flex flex-col md:flex-row justify-center gap-y-3 mx-5 md:gap-x-5 mt-10 max-w-full'>
                {backend.map((item, index)=>{
                    return <div className='max-w-[400px] mx-auto md:mx-0'>
                    <Card key={index} title={item.name} image={item.image} github={item.github} liveSite={item.liveSite}/>
                    </div>
                })}
            </div>
            )}

            {active==="Fullstack" && (
                <div className='skills mt-60 sm:mx-5 max-w-full mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 grid-rows-1 sm:grid-rows-3 lg:grid-rows-2'>
                {fullstack.map((item, index)=>{
                    return <Card key={index} title={item.name} image={item.image} github={item.github} liveSite={item.liveSite}/>
                })}
            </div>
            )}

        </div>
    </section>
  )
}

export default Projects;