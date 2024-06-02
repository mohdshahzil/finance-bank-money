"use client";
import React from "react";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "./ui/button";
import PlayButtonSVG from "@/public/assets/SVG/PlayButtonSVG";
import RightArrowSVG from "@/public/assets/SVG/RightArrowSVG";
import Iphones from "@/public/assets/images/Iphones.png";
import SlantLine from "@/public/assets/images/SlantLine.png";

import Image from "next/image";
const HeroSection = () => {
  const words = ["Optimal", "Smartest", "Wisest"];

  return (
    <div className=" flex flex-col md:flex-row p-2">
      <div className=" md:w-1/2">
        <div className="font-extrabold z-20">
          <h1 className="text-5xl md:text-6xl">
            Make <FlipWords words={words} />
          </h1>
          <h1 className="text-5xl md:text-6xl"> Financial Decisions</h1>
          <div>
            <div className="my-6 text-xl opacity-55 text-justify">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </div>
          </div>
          <div className="flex flex-row">
            <motion.div whileHover="hover" className="mr-2">
              <Button className="text-white px-10 py-6 rounded-none flex gap-2 items-center">
                Get Started
                <motion.div
                  variants={{
                    hover: { x: 5 },
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <RightArrowSVG />
                </motion.div>
              </Button>
            </motion.div>
            <div className="w-4"></div>

            <motion.div
              className="ml-2 flex text-black items-center justify-center gap-2 hover:cursor-pointer"
              whileHover="hover"
            >
              <motion.div
                variants={{
                  hover: { scale: 1.2 },
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <PlayButtonSVG />
              </motion.div>
              Watch Video
            </motion.div>
          </div>
          <div>
            <Image src={SlantLine} alt="slantline"></Image>
          </div>
        </div>
      </div>
      <div className="md:w-1/2  z-20  flex items-center justify-center">
        <Image src={Iphones} alt="iphones"></Image>
      </div>
    </div>
  );
};

export default HeroSection;
