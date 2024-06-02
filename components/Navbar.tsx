"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import LogoSVG from "@/public/assets/SVG/LogoSVG";
import BrandSVG from "@/public/assets/SVG/BrandSVG";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="px-2 py-8 flex flex-row items-center justify-between">
      <div className="flex gap-8 items-center">
        <div>
          <LogoSVG />
        </div>
        <div>
          <BrandSVG />
        </div>
        <div className="w-3"></div>
        <div className="hidden md:flex gap-4">
          <div className="clash-display font-bold text-[#FF5555]">Home</div>
          <div className="font-bold">About Us</div>
          <div className="font-bold">Pricing</div>
          <div className="font-bold">Features</div>
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div className="hidden md:block">
        <Button className="rounded-none px-8">Download</Button>
      </div>
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-white flex flex-col items-center md:hidden z-20"
        >
          <div className="clash-display font-bold text-[#FF5555] py-2 ">
            Home
          </div>
          <div className="font-bold py-2">About Us</div>
          <div className="font-bold py-2">Pricing</div>
          <div className="font-bold py-2">Features</div>
          <Button className="rounded-none px-8 py-2">Download</Button>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
