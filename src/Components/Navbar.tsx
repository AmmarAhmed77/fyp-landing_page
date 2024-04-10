import Image from 'next/image'
import Link from 'next/link'
import {NAV_LINKS} from '../constants'
import Button from '@/Components/Button'
const Navbar = () => {
  return (
    <div className=' flexBetween 
    padding-container max-container   relative z-30 py-5'>
      <Link href='/' >
        <Image src="/hilink-logo.svg" alt='logo' width={74} height={29} />
      </Link>
      <ul className='hidden  h-full gap-12 lg:flex ' >
            {
                NAV_LINKS.map((link) => (
                    <Link  href="link.href" key="link.key" 
                    className='regular-16 pb-1.5 cursor-pointer flexCenter transition-all hover:font-bold  '>
                        {link.label}
                    </Link>
                ))
            }
      </ul>
      <div className="lg:flexCenter hidden">
            <Button icon="/user.svg" title="Login" type="button" variant="btn_dark_green" />
      </div>
      <Image src="menu.svg" alt="menu" width={32} height={32} className="cursor-pointer inline-block lg:hidden" />
     

      
    </div>
  )
}

export default Navbar
