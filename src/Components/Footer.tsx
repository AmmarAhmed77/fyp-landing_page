import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FOOTER_LINKS,FOOTER_CONTACT_INFO,SOCIALS} from '@/constants'
const Footer = () => {
  return (
    <footer className="flexCenter mb-24 mt-32">
      <div className="padding-container max-container flex w-full flex-col gap-14 " >
        <div className="flex flex-col items-start  justify-start gap-8 md:flex-row md:gap-[10%]">
          <Link href="/">
            <Image 
              src='hilink-logo.svg'
              alt='hilink'
              width={74}
              height={29}
            />
          </Link>
          <div className='flex  flex-wrap justify-start gap-[10%] flex-1 gap-y-10 '>
            { FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul  className='flex flex-col gap-4'>
                    {
                      columns.links.map((link) => (
                        <Link href="/" key={link}>
                          {link}
                        </Link>
                      ))
                    }
                  </ul>
                </FooterColumn>
              ))
            }
            <div>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link)=> (
                    <Link href='/' key={link} className='flex flex-row gap-2'>
                        <p>
                          {link.label}
                        </p>
                        <p class="medium-14 whitespace-nowrap text-blue-70">
                          {link.value}
                        </p>
                    </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col">
              <FooterColumn title={SOCIALS.title}>
                <ul className='flex flex-row gap-4'>
                  {SOCIALS.links.map((link) => (
                    <Link href='/' >
                      <Image src={link} alt='link' width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div>
          <hr className='w-full  bg-gray-20 ' />
          <div className='w-full flex justify-center mt-2'>2023 Hilink | All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}
type FooterProps = {
  title: string;
  children : React.ReactNode;

}
const FooterColumn =({title,children}: FooterProps)  => {
  return (
    <div className='flex flex-col gap-4 '>
      <h4  className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer
