import Features from '@/components/Features'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'

import React from 'react'
const page = () => {
  return (
    <><Navbar></Navbar>
      <HeroSection></HeroSection>
      <Features></Features>
    </>
  )
}

export default page