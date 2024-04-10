import React from 'react'
import Image from 'next/image'
const Guide = () => {
  return (
    <section className=' flex flex-col mt-8  padding-container xl:max-container  xl:w-full'>
        {/* left */}
      <div  className='xl:flex xl:flex-row w-full xl:items-center'>
        <div className='flex flex-col xl:w-[50%]'>
          <div>
          
            <p className='regular-18 relative text-green-50 mb-3'>
            <Image 
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className='absolute -top-[37px]  w-10 lg:w-[50px] lg:-top-12 '
              class
            />
              WE ARE HERE FOR YOU
            </p>
          </div>
            <h1 className='bold-40 lg:bold-64 mb-6 xl:max-w-[390px]'>Guide You to Easy Path</h1>
        </div>
        {/* Right */}
        <div className='xl:w-[50%]'>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>
      <div className='relative'>
        <div className='pt-10'>
          <Image
            src='/boat.png'
            alt='boat'
            width={1440}
            height={580}
            className='w-full object-cover object-center 2xl:rounded-5xl'
          />
          <div className='absolute  left-[5%] top-12 lg:top-20  flex flex-row   rounded-3xl gap-2 bg-white max-w-[300px] h-[233px] p-8'>
          
            <div className=''>
              {/* image */}
              <Image
                src='/meter.svg'
                alt='meter'
                width={33}
                height={233}
              />
            </div>
         
            <div className='flex flex-col w-full justify-between'>
              <div className='flex w-full flex-col gap-2'>
                <div className='flex  w-full justify-between'>
                  <span className='text-gray-20 regular-16'>Destination</span>
                  <span className='bold-16 text-green-50'>48 min</span>
                </div>
                <p className='bold-20 '>Aguas Calientes</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-gray-20 regular-16'>Start Track</p>
                <p className='bold-20 '>Wonorejo Pasuruan</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default Guide
