"use client"
import React from "react";
import Ellipse from "./ui/Ellipse";
import PhonesSVG from "@/public/assets/SVG/PhonesSVG";
import { Button } from "./ui/button";
import PlayButtonSVG from "@/public/assets/SVG/PlayButtonSVG";
import RightArrowSVG from "@/public/assets/SVG/RightArrowSVG";
import Iphones from "@/public/assets/images/Iphones.png";
import SlantLine from "@/public/assets/images/SlantLine.png";
import Image from "next/image";
const HeroSection = () => {
    return (
        <div className=" flex flex-col md:flex-row">
            <div className=" md:w-1/2" >
                <div className="font-extrabold z-20">
                    {/* <div className="h-12" ></div>
                    <div className="h-12" ></div>
                    <div className="h-4" ></div> */}

                    <h1 className="text-6xl" >Make The Best</h1>
                    <h1 className="text-6xl" >Financial Decisions</h1>


                    <p className="my-6 text-xl opacity-55" >Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    <div className="flex flex-row" >
                        <Button className=" text-white px-10 py-6 rounded-none mr-2 flex gap-2" >Get Started <RightArrowSVG></RightArrowSVG> </Button>
                        <div className="w-4" ></div>
                        <p className="ml-2 flex text-black items-center justify-center gap-2" >
                            <PlayButtonSVG></PlayButtonSVG>
                            Watch Video
                        </p>
                    </div>
                    <div>
                        <Image src={SlantLine} alt="slantline" ></Image>
                    </div>
                </div>
                {/* <div className="absolute">
                    <Ellipse />
                </div> */}
            </div>
            <div className="md:w-1/2  z-20  flex items-center justify-center">
                <Image src={Iphones} alt="iphones"  ></Image>
            </div>
        </div>
    );
};

export default HeroSection;
