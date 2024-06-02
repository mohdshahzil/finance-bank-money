"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import PrimaryHeading from "./Headings/PrimaryHeading";

const FAQ = () => {
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
    <div className="p-2">
      <div className="h-5"></div>
      <h1 className="text-[#FF5555] text-2xl  ">FAQ</h1>
      <PrimaryHeading text="Frequently Asked"></PrimaryHeading>
      <PrimaryHeading text="Questions"></PrimaryHeading>
      <div className="h-5"></div>
      <div className="h-5"></div>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="md:w-1/2 py-3 flex flex-col  gap-4">
          <div className="p-5 bg-[#FF5555] text-white rounded-md">
            <h1 className="text-xl font-bold">
              The Best Financial Accounting{" "}
            </h1>
            <h1 className="text-xl font-bold">App Ever!</h1>
            <div ref={ref} className="my-2">
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
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </motion.div>
            </div>
          </div>
          <div className="p-5  rounded-md">
            <h1 className="text-xl font-bold">
              The Best Financial Accounting{" "}
            </h1>
            <h1 className="text-xl font-bold">App Ever!</h1>
            <div ref={ref} className="my-2">
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
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </motion.div>
            </div>
          </div>
          <div className="p-5 bg-[#FF5555] text-white rounded-md">
            <h1 className="text-xl font-bold">
              The Best Financial Accounting{" "}
            </h1>
            <h1 className="text-xl font-bold">App Ever!</h1>
            <div ref={ref} className="my-2">
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
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 py-3 flex flex-col  gap-4">
          <div className="p-5  rounded-md">
            <h1 className="text-xl font-bold">
              The Best Financial Accounting{" "}
            </h1>
            <h1 className="text-xl font-bold">App Ever!</h1>
            <div ref={ref} className="my-2">
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
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </motion.div>
            </div>
          </div>
          <div className="p-5 bg-[#FF5555] text-white rounded-md">
            <h1 className="text-xl font-bold">
              The Best Financial Accounting{" "}
            </h1>
            <h1 className="text-xl font-bold">App Ever!</h1>
            <div ref={ref} className="my-2">
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
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </motion.div>
            </div>
          </div>
          <div className="p-5  rounded-md">
            <h1 className="text-xl font-bold">
              The Best Financial Accounting{" "}
            </h1>
            <h1 className="text-xl font-bold">App Ever!</h1>
            <div ref={ref} className="my-2">
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
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
