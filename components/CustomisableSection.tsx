import React from "react";
import WhyPhone from "@/public/assets/images/WhyPhone.png";
import Image from "next/image";
import StarSVG from "@/public/assets/SVG/StarSVG";
import CustomImg from "@/public/assets/images/Customisable.png";
import PrimaryParagraph from "./Paragraphs/PrimaryParagraph";
const CustomisableSection = () => {
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
            <PrimaryParagraph text={text}></PrimaryParagraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomisableSection;
