"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import PrimaryHeading from "./Headings/PrimaryHeading";
import TestimonialImage from "@/public/assets/images/Testimonial.png";
import Image from "next/image";
import PrimaryParagraph from "./Paragraphs/PrimaryParagraph";
const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      //fire animation
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-2">
        <div ref={ref} className="text-xl mt-2 opacity-70">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.3 }}
            className=" "
          >
            TESTIMONIAL
          </motion.div>
        </div>
        <div className="mt-2 mb-4">
          <p className="text-5xl font-extrabold">What Our Users</p>
          <p className="text-5xl font-extrabold">Say About Us?</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image src={TestimonialImage} alt="testimonial"></Image>
        </div>
        <div className="md:w-1/2 p-3">
          <div className="hidden md:block h-5"></div>
          <div className="hidden md:block h-5"></div>
          <div className="hidden md:block h-5"></div>
          <div className="hidden md:block h-5"></div>
          <PrimaryHeading text="The Best Financial Accounting"></PrimaryHeading>
          <PrimaryHeading text="App Ever!"></PrimaryHeading>
          <div ref={ref} className="mt-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.3, delay: 0.3 }}
              className=" "
            >
              <PrimaryParagraph text="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”"></PrimaryParagraph>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
