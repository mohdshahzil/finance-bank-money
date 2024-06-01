import Features from '@/components/Features'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import WhySection from '@/components/WhySection'

import React from 'react'
const page = () => {
  return (
    <><Navbar></Navbar>
      <HeroSection></HeroSection>
      <Features></Features>
      <WhySection></WhySection>
    </>
  )
}

export default page