import React from 'react'
import Frame from "@/public/assets/images/Frame.png";
import Image from 'next/image';
const DownloadSection = () => {
    return (
        <div className='flex flex-col items-center justify-center p-2 md:p-0' >
            {/* <div className="h-5" ></div> */}
            <div className="h-5 sm:hidden" ></div>
            <div className="h-5 sm:hidden " ></div>
            <div className="h-5 sm:hidden " ></div>
            {/* <div className="h-5" ></div> */}

            <Image src={Frame} alt='downloadsection' ></Image>
        </div>
    )
}

export default DownloadSection