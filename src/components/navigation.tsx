import Link from "next/link"; 
import { IoSearchOutline } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa"; 

export default function Navigation() {
  return (
    <nav className="hidden md:block"> {/* Hide the nav on mobile, show on medium (md) screens and up */}
      <ul className="flex items-center gap-6"> {/* Flex container for horizontal layout */}
        
        {/* Search Icon with Cover */}
        <button className="bg-[#444444] p-2 rounded-full">
          <IoSearchOutline className="text-[#C79A5F]" /> 
        </button>

        {/* Logo or Site Name */}
        <span className="text-white">GOE</span> 

        {/* Links */}
        {/* First link with "EgyBook" text */}
        <Link href="#" className="flex items-center gap-0">
          <span className="text-[#C79A5F]">Egy</span>
          <span className="text-white">Book</span>
        </Link>

        {/* Second link with "EgyExplore" text */}
        <Link href="#" className="flex items-center gap-0">
          <span className="text-[#C79A5F]">Egy</span>
          <span className="text-white">Explore</span>
        </Link>

        {/* Third link with "EgyTreasure" text */}
        <Link href="#" className="flex items-center gap-0">
          <span className="text-[#C79A5F]">Egy</span>
          <span className="text-white">Treasure</span>
        </Link>

        {/* Global Icon (Language selector) */}
        <button className="flex items-center gap-1 text-white">
          <FaGlobe className="text-white" /> 
          <span className="text-white">EN</span> 
        </button>

        {/* Login Button */}
        <Link href="/" className="bg-[#C79A5F] text-white px-4 py-2 rounded-lg hover:bg-[#b88a4b]">
          Login
        </Link>

        {/* Sign Up Button */}
        <Link href="/" className="bg-[#C79A5F] text-white px-4 py-2 rounded-lg hover:bg-[#b88a4b]">
          Sign Up
        </Link>
      </ul>
    </nav>
  );
}
