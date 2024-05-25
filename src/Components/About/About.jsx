import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <div className='bg-[#fdf8f4] flex justify-center flex-col items-center gap-14 py-3 text-[#0C1D37] '>
      <div className='text-5xl font-semibold'>About <span className='text-[#c9313b] bg-[#f7cccb] px-2 rounded-xl'>Us</span></div>
      <div id = "aboutMainDiv" className='w-[70%] flex gap-20 justify-center items-center'>
        <div id = "aboutSubDiv" className='w-[40%] rounded-2xl'>
            <img src="https://assets-global.website-files.com/60c9dc6687615a388cf751fb/6107a4221d926384a75a53d3_home_wet_hire.jpg" alt="" className='w-[100%] h-[600px] rounded-2xl'/>
        </div>

        <div id = "aboutSubDiv" className='w-[40%] flex flex-col justify-center gap-7'>
            <h1 className='text-4xl font-semibold'>Level up your production with <span className='text-[#c9313b] bg-[#f7cccb] px-2 rounded-xl'>ShareLens</span></h1>
            <p className='text-justify w-[90%]'>At ShareLens, we believe that everyone should have access to top-quality photography and videography equipment without the high costs of ownership. Whether you’re a professional photographer, a budding filmmaker, or an enthusiast capturing life's precious moments, ShareLens is here to equip you with the tools you need to bring your vision to life.</p>
            <div className='flex gap-3 items-center'>
                <div className='rounded-full p-2 bg-white w-fit flex justify-center items-center shadow-lg'><FaCheckCircle className='text-[#db4846]'/></div>
                <p className='font-semibold'>Extensive Inventory</p>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='rounded-full p-2 bg-white w-fit flex justify-center items-center shadow-lg'><FaCheckCircle className='text-[#db4846]'/></div>
                <p className='font-semibold'>Easy Booking Process</p>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='rounded-full p-2 bg-white w-fit flex justify-center items-center shadow-lg'><FaCheckCircle className='text-[#db4846]'/></div>
                <p className='font-semibold'>Quality Assurance</p>
            </div>
        </div>
      </div>
    </div>
  )
}
