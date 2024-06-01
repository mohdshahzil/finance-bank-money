import React from 'react'
import { Button } from './ui/button'
import LogoSVG from '@/public/assets/SVG/LogoSVG'
import BrandSVG from '@/public/assets/SVG/BrandSVG'

const Navbar = () => {
  return (
    <div className='p-8  flex flex-row items-center justify-between' >
      <div className='flex gap-8 items-center' >
        <div><LogoSVG></LogoSVG></div>
        <div><BrandSVG></BrandSVG></div>
        <div className='w-3'></div>
        <div className='clash-display font-bold text-[#FF5555]  hidden md:visible' >Home</div>
        <div className='font-bold hidden md:visible ' >About Us</div>
        <div className='font-bold hidden md:visible'>Pricing</div>
        <div className='font-bold hidden md:visible'>Features</div>
      </div>
      <div><Button className='rounded-none px-8' >Download</Button></div>
    </div>
  )
}

export default Navbar