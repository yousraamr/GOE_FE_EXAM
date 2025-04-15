import { XIcon } from "lucide-react";
import { motion } from "motion/react";
import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";
import GOELogo from "@/assets/GOELogo.png";
import { FaGlobe } from "react-icons/fa"; 

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <motion.nav
      initial={{ y: "-100%" }} // Initial position (off-screen)
      animate={{ y: 0 }} // Animates to the final position
      exit={{ y: "-100%" }} // Animates out of view when closed
      transition={{ duration: 0.3 }} 
      className="fixed inset-0 bg-[#121212] text-white z-50 flex flex-col"
    >
      {/* Top section: Logo & close button */}
      <div className="flex justify-between items-center p-4">
        <Logo />
        <button 
          className="cursor-pointer" 
          onClick={onClose} 
          aria-label="Close Navigation" 
        >
          <XIcon />
        </button>
      </div>

      {/* Middle section: Navigation links */}
      <div className="flex-1 overflow-y-auto px-4">
        <ul className="space-y-4">
          {/* Language switch link */}
          <Link href="#" className="flex items-center gap-2 text-lg md:text-xl">
            <FaGlobe className="text-white" /> 
            <span className="text-white">EN</span>
          </Link>

          {/* Login link */}
          <Link href="/login" className="flex items-center gap-2 text-lg md:text-xl">
            <span className="text-white">Login</span>
          </Link>

          {/* Sign Up link */}
          <Link href="/signup" className="flex items-center gap-2 text-lg md:text-xl">
            <span className="text-white">Sign Up</span>
          </Link>
        </ul>
      </div>

      {/* Bottom section: GOE logo */}
      <div className="p-4 flex justify-center">
        <Image src={GOELogo} alt="GOE Logo" width={70} height={70} />
      </div>
    </motion.nav>
  );
}
