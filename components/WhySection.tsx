import React from 'react'
import PrimaryHeading from './Headings/PrimaryHeading'
import WhyPhone from "@/public/assets/images/WhyPhone.png";
import Image from 'next/image';
import NotificationSVG from '@/public/assets/SVG/NotificationSVG';
const WhySection = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row-reverse'> <div className='md:w-1/2' ><Image src={WhyPhone} alt='whyphone' ></Image></div>
            <div className='md:w-1/2 p-3'>
                <div className='h-5' ></div>
                <div className='h-5' ></div>
                <div className='h-5' ></div>
                <div className='h-5' ></div>
                <h1 className='text-[#FF5555] text-2xl  ' >Features</h1>
                <PrimaryHeading text='Why Choose Uifry?' ></PrimaryHeading>
                <div className='mt-8' >
                    <div className='flex flex-col gap-6' >
                        <h1 className='flex flex-row text-2xl font-semibold items-center gap-2' > <NotificationSVG></NotificationSVG> Clever Notifications</h1>
                        <p className='opacity-60'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhySection