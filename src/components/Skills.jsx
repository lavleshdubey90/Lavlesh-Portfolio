import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '@splidejs/react-splide/css';
import { assets } from "../assets/assets";

const Skills = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='z-10 max-w-screen-xl mx-auto relative py-20 md:py-40' id="skills">
      <h1 className='text-4xl bg-gradient-to-tr from-purple-900 via-violet-400 to-white text-center bg-clip-text text-transparent font-[gilroy] leading-tight mt-2 md:mt-6'>My Skills</h1>

      <div className='slider-container px-5 mt-10'>
        <Slider {...settings}>
          {assets.map((item, index) => (

            <div key={index} className='w-40 cursor-pointer py-5 px-8 text-center rounded-lg backdrop-blur-lg bg-black/10 border hover:scale-110 hover:shadow-lg hover:shadow-purple-600 duration-300  border-purple-700'>
              <img src={item.img} alt="react" className='w-20 h-20 mx-auto' />
              <p className='mx-auto text-sm sm:text-base mt-5 text-purple-600'>{item.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Skills;