import React from 'react'
import Image from 'next/image'
import Button from '../Components/Button'
const Hero = () => {
  return (
    <section className=' max-container padding-container flex flex-col  gap-20 py-10 pb-32 lg:py-20 xl:flex xl:flex-row ' >
      
      {/* LEFT */}
      <div className='flex flex-col gap-5 '>
        <div className=''>
          <Image 
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className='relative top-3 w-10 lg:w-[50px] lg:top-[1.24rem]'
            class
          />
          <h1 className=' bold-40 md:bold-52 flex flex-col  lg:bold-88 z-10'><span>Plus+ Collaborative </span> <span className=''>Project Management</span> </h1>
        </div>
        <p className='regular-16 mt-4 text-gray-30 xl:max-w-[520px]'>Pulse+ combines the strengths of communication, project management, and intelligent features, providing a holistic platform that caters specifically to software professionals</p>
        <div className="my-4 flex flex-wrap gap-5 ">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_,index) => (
              <Image
              src="/star.svg" alt="star" key={index} width={24} height={24} />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className='regular-16 lg:regular-20 ml-1 '>Excellent Reviews</span>
          </p>
        </div>
        <div className='flex  flex-col w-full gap-3 sm:flex-row'>
          <Button
            type="button" 
            title="Download App"
            variant="btn_green"
          />
          <Button
            type="button" 
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="hero-map left-40 -z-10 xl:left-80" />
      {/* Right */}
      <div className="relative flex flex-1 top-16 items-start">
      
        <div className=" z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col ">
            <div className="flexBetween">
              <p className='regular-16 block text-gray-20'>Location</p>
              <Image src="/close.svg" alt="close Image" width={24} height={24}/>
            </div>
            <p className='bold-20 text-white'>Anas Shafiq</p>
          </div>
          <div className='flex justify-between '>
            <div>
            <p className='regular-16 block text-gray-20'>Distance</p>
            <p className='bold-20 text-white'>173.28 mi</p>
            </div>
            <div>
              <p className='regular-16 block text-gray-20'>Elevation</p>
              <p className='bold-20 text-white'>2.040 km</p>
            </div>
          </div>
        </div>
        
      </div>


    </section>
  )
}

export default Hero
