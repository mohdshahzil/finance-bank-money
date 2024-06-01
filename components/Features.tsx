import React from 'react'
import FeaturesPhone from "@/public/assets/images/FeaturesPhone.png";
import Image from 'next/image';
import StarSVG from '@/public/assets/SVG/StarSVG';
import CubeSVG from '@/public/assets/SVG/CubeSVG';
import Cube2SVG from '@/public/assets/SVG/Cube2SVG';
const Features = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row' >
            <div className='md:w-1/2' ><Image src={FeaturesPhone} alt='featuresphone' ></Image></div>
            <div className='md:w-1/2 p-3'>

                <h1 className='text-[#FF5555] text-2xl' >Features</h1>
                <h1 className='font-bold text-4xl '  >Uifry Premium</h1>
                <div className='mt-8' >
                    <div className='flex flex-col gap-6' >

                        <h1 className='flex flex-row font-semibold gap-2 text-xl ' > <StarSVG></StarSVG> Budgeting Intervals</h1>
                        <p className='opacity-60'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        <h1 className='flex flex-row font-semibold gap-2 text-xl ' > <CubeSVG></CubeSVG> Budgeting Intervals</h1>
                        <p className='opacity-60'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        <h1 className='flex flex-row font-semibold gap-2 text-xl ' > <Cube2SVG></Cube2SVG> Budgeting Intervals</h1>
                        <p className='opacity-60'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features