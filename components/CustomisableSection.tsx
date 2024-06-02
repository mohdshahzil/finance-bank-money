"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import StarSVG from "@/public/assets/SVG/StarSVG";
import CustomImg from "@/public/assets/images/Customisable.png";
import PrimaryParagraph from "./Paragraphs/PrimaryParagraph";
const CustomisableSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      //fire animation
      mainControls.start("visible");
    }
  }, [isInView]);

  const text =
    "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.";
  return (
    <div className="flex flex-col-reverse md:flex-row p-2">
      {" "}
      <div className="md:w-1/2">
        <Image src={CustomImg} alt="customimg"></Image>
      </div>
      <div className="md:w-1/2 p-3">
        <div className="hidden md:block h-5"></div>
        <div className="hidden md:block h-5"></div>
        <div className="hidden md:block h-5"></div>
        <div className="hidden md:block h-5"></div>
        <div className="mt-8">
          <div className="flex flex-col gap-6">
            <h1 className="flex flex-row text-2xl font-semibold items-center gap-2">
              {" "}
              <StarSVG></StarSVG> Fully Customizable
            </h1>
            <div ref={ref}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.3, delay: 0.3 }}
                className=""
              >
                <PrimaryParagraph text={text}></PrimaryParagraph>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomisableSection;
