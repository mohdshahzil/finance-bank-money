import React from "react";
import FeaturesPhone from "@/public/assets/images/FeaturesPhone.png";
import Image from "next/image";
import StarSVG from "@/public/assets/SVG/StarSVG";
import CubeSVG from "@/public/assets/SVG/CubeSVG";
import Cube2SVG from "@/public/assets/SVG/Cube2SVG";
import PrimaryHeading from "./Headings/PrimaryHeading";
import PrimaryParagraph from "./Paragraphs/PrimaryParagraph";
const featureList = [
  {
    icon: <StarSVG />,
    title: "Budgeting Intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    icon: <CubeSVG />,
    title: "Budgeting Intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    icon: <Cube2SVG />,
    title: "Budgeting Intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row p-2">
      <div className="md:w-1/2">
        <Image src={FeaturesPhone} alt="featuresphone" />
      </div>
      <div className="md:w-1/2 p-3">
        <h1 className="text-[#FF5555] text-2xl font-semibold">FEATURES</h1>
        <PrimaryHeading text="Uifry Premium" />
        <div className="mt-8">
          <div className="flex flex-col gap-6">
            {featureList.map((feature, index) => (
              <div key={index}>
                <h1 className="flex flex-row font-semibold gap-2 text-xl">
                  {feature.icon} {feature.title}
                </h1>
                <PrimaryParagraph text={feature.description}></PrimaryParagraph>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
