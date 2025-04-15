"use client";
import Image from "next/image";
import GOELogo from "@/assets/GOELogo.png"; 

// Importing social media icons
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1b1b1b] to-black text-white py-10 px-6 md:px-20">
      {/* Main container for footer */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Left section */}
        <div className="flex-1">
          {/* Logo */}
          <Image src={GOELogo} alt="GOE Logo" className="w-24 mb-4" />
          {/* Description text */}
          <p className="text-lg font-semibold mb-6">Lorem, Ipsum Lorem, Ipsum Lorem, Ipsum or less.</p>
          {/* Discover More button */}
          <button className="bg-[#C79A5F] text-white px-6 py-2 rounded-full font-semibold mb-6">
            Discover More
          </button>
          {/* Navigation links */}
          <div className="flex flex-wrap gap-4 text-sm font-medium text-[#C79A5F]">
            <Link href="#" className="flex items-center gap-0">
              <span className="text-white">Home</span>
            </Link>

            <Link href="#" className="flex items-center gap-0">
              <span className="text-[#C79A5F]">Egy</span>
              <span className="text-white">Book</span>
            </Link>

            <Link href="#" className="flex items-center gap-0">
              <span className="text-[#C79A5F]">Egy</span>
              <span className="text-white">Explore</span>
            </Link>

            <Link href="#" className="flex items-center gap-0">
              <span className="text-[#C79A5F]">Egy</span>
              <span className="text-white">Treasure</span>
            </Link>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col items-center">
          {/* Social media icons */}
          <div className="flex gap-3 mb-3">
            <a href="#" className="bg-[#C79A5F] text-white p-2 rounded-lg text-xl">
              <BiLogoInstagramAlt />
            </a>
            <a href="#" className="bg-[#C79A5F] text-white p-2 rounded-lg text-xl">
              <FaFacebookSquare />
            </a>
            <a href="#" className="bg-[#C79A5F] text-white p-2 rounded-lg text-xl">
              <AiFillTikTok />
            </a>
            <a href="#" className="bg-[#C79A5F] text-white p-2 rounded-lg text-xl">
              <RiTwitterXFill />
            </a>
            <a href="#" className="bg-[#C79A5F] text-white p-2 rounded-lg text-xl">
              <SiLinkedin />
            </a>
          </div>
          {/* Copyright text */}
          <p className="text-sm text-center text-white">
            Copyright Gates of Egypt &copy; {new Date().getFullYear()} 
            <br />
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
