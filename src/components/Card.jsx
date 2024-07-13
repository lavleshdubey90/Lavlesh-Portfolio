import React from 'react';

const Card = (props) => {

    console.log(props.image);

    return props.image ? (
        <div className={`border-2 mx-5 sm:mx-0 relative duration-500 border-purple-700 rounded-md`}>
            <img src={props.image} alt="" className='rounded-md object-center object-cover' />
            <div className='absolute grid rounded-md place-content-center duration-500 opacity-0 hover:opacity-100 w-full h-full bg-gradient-to-r from-purple-700/20 to-purple-700/80 backdrop-blur-lg top-0 left-0'>
                <div className='w-fit'>
                    <h3 className='text-2xl text-center sm:text-3xl mb-5'>{props.title}</h3>
                    <span className='flex items-center justify-center mx-auto'><a href={props.github} target='__blank' className='mr-2 text-xs sm:text-sm underline hover:text-purple-500 duration-300 underline-offset-4'>View Code</a> || <a href={props.liveSite} target='__blank' className='ml-2 text-xs sm:text-sm underline hover:text-purple-500 duration-300 underline-offset-4'>Visit Site</a></span>
                </div>
            </div>
        </div>
    ) :
        <>
            <h2 className='text-xl sm:text-2xl md:text-4xl bg-gradient-to-tr from-purple-900 via-violet-400 to-white text-center bg-clip-text text-transparent font-[gilroy] leading-tight mt-2 md:mt-6'>Currently Working!!!</h2>
        </>
}

export default Card;