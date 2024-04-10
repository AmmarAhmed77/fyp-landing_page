import React from 'react'
import Image from 'next/image'
import {FEATURES} from '@/constants'

const Features = () => {
  return (
    <section className="max-container mt-20 padding-container bg-center bg-feature-bg  bg-no-repeat ">
       <div className='flex justify-start lg:justify-center pt-8 '>
          
          <h1 className='bold-40 flex  flex-col  relative lg:bold-64 '>
            <Image 
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className='absolute -top-8 w-10  lg:w-[50px] lg:-top-10  '
              
            />
            Our Features
          </h1>
        </div>
        <div className='flex flex-row  relative bg-bg-pattern-2 mt-10'>
          {/* left`` */}
          <div className='w-[0%] lg:w-[40%] '>
            {/* <div className='hero-map -z-10 opacity-30'/> */}
            <Image
              src='/phone.png'
              alt='phone'
              width={440}
              height={1000}
              className='feature-phone  lg:-left-[9rem] xl:left-0   '
            />
          </div>
          {/* right`*/}
          <div className=' w-[100%]  lg:w-[60%]  md:grid md:grid-cols-2  gap-6'>
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} title={feature.title} icon={feature.icon} description={feature.description} />
            ))}
          </div>
        </div>
    </section>
  )
}
interface FeatureProps {
  title : string ;
  icon : string ;
  description : string ;
}

const FeatureItem =({title , icon , description}: FeatureProps) => {
  return (
    <div className='flex flex-col gap-2 mt-6 '>
      <div className='p-4 lg:p-7 w-fit bg-green-50 rounded-full'>
        <Image
          src={icon}
          width={28}
          height={28}
          className=''
        />
      </div>
      <h1 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h1>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">{description}</p>
    </div>
  )
}

export default Features
