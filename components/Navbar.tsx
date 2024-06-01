import React from 'react'
import { Button } from './ui/button'
import LogoSVG from '@/public/assets/LogoSVG'
import BrandSVG from '@/public/assets/BrandSVG'

const Navbar = () => {
  return (
    <div className='p-12    flex flex-row items-center justify-between' >
      <div className='flex gap-8 items-center' >
        <div><LogoSVG></LogoSVG></div>
        <div><BrandSVG></BrandSVG></div>
        <div className='w-3'></div>
        <div className='clash-display font-bold text-[#FF5555]' >Home</div>
        <div className='font-bold' >About Us</div>
        <div className='font-bold'>Pricing</div>
        <div className='font-bold'>Features</div>
      </div>
      <div><Button className='rounded-none w-32' >Download</Button></div>
    </div>
  )
}

export default Navbar