import BrandSVG from "@/public/assets/SVG/Footer/BrandSVG";
import LogoSVG from "@/public/assets/SVG/Footer/LogoSVG";
import MessageSVG from "@/public/assets/SVG/Footer/MessageSVG";
import PhoneSVG from "@/public/assets/SVG/Footer/PhoneSVG";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Footer = () => {
  return (
    <div className="p-3">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="flex flex-col">
          <div className="flex flex-row items-center m-2 gap-2">
            <div>
              <LogoSVG></LogoSVG>
            </div>
            <div>
              <BrandSVG></BrandSVG>
            </div>
          </div>
          <div className="flex flex-row items-center m-2 gap-2 ">
            <div>
              {" "}
              <MessageSVG></MessageSVG>
            </div>
            <div>Help@Frybix.com</div>
          </div>
          <div className="flex flex-row items-center m-2 gap-2">
            <div>
              {" "}
              <PhoneSVG></PhoneSVG>
            </div>
            <div>+1 234 456 678 89</div>
          </div>
        </div>
        {/* second  begins from here */}
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-bold">Links</div>
          <div className="text-lg font-medium">Home</div>
          <div className="text-lg font-medium">About Us</div>
          <div className="text-lg font-medium">Bookings</div>
          <div className="text-lg font-medium">Blogs</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-bold">Legal</div>
          <div className="text-lg font-medium">Terms Of Use</div>
          <div className="text-lg font-medium">Privacy Policy</div>
          <div className="text-lg font-medium">Cookie Policy</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-bold">Product</div>
          <div className="text-lg font-medium">Take Tour</div>
          <div className="text-lg font-medium">Live Chat</div>
          <div className="text-lg font-medium">Reviews</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-bold">Newsletter</div>
          <div className="text-lg font-medium">Stay Up To Date</div>
          <div className="flex flex-row gap-3 p-1">
            <Input type="email" placeholder="Your Email" />
            <Button type="submit" className="rounded-none">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="m-12">
        <hr />
      </div>
      <div className="text-center mb-8 font-medium" >Copyright 2022 uifry.com all rights reserved</div>
    </div>
  );
};

export default Footer;
