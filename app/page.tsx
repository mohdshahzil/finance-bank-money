import DownloadSection from '@/components/DownloadSection'
import FAQ from '@/components/FAQ'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Testimonial from '@/components/Testimonial'
import WhySection from '@/components/WhySection'

import React from 'react'
const page = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Features></Features>
      <WhySection></WhySection>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <DownloadSection></DownloadSection>
      <Footer></Footer>
    </>
  )
}

export default page