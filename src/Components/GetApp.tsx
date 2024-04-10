import React from 'react'
import Image from 'next/image'
import Button from '@/Components/Button'
const GetApp = () => {
  return (
    <section className='get-app max-container max-w-[440px]  mt-36 w-full relative' >
      {/* left */}
      <div className='flex flex-col justify-center gap-12 w-[100%] lg:w-[60%] p-10'>
        <h1 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get for free now!</h1>
        <p className='regular-16 text-gray-16'>Available on iOS and Android</p>
        <div className='xl:flex xl:flex-row gap-4 flex flex-col w-[100%]'>
          <Button type='button' title='App Store' icon='/apple.svg' variant='w-[100%] xl:w-[50%] pt-4 pb-4 bg-white text-green-50 '  />
          <Button type='button' title='Play Store' icon='play.svg'  variant='w-[100%] xl:w-[50%] pt-4 pb-4' />
        </div>
      </div>
      {/* right */}
      <div className='m-auto w-[60%] lg:w-[40%] '>
        <Image 
          src='/phones.png'
          alt='phone'
          width='550'
          height='870'
          className='xl:absolute relative top-0 xl:-top-40 bottom-0 overflow-hidden'
        />
      </div>
    </section>
  )
}

export default GetApp
