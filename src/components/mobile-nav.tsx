import { XIcon } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";
import GOELogo from "@/assets/GOELogo.png";
import { FaGlobe, FaRegHeart, FaShoppingCart } from "react-icons/fa";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

export default function MobileNav({
  isOpen,
  onClose,
  isAuthenticated,
  onLogin,
  onLogout,
}: MobileNavProps) {
  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
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

      

      

      {/* Authenticated / Unauthenticated actions */}
      <div className="mt-10 space-y-4 px-4">
        {!isAuthenticated ? (
          <>
          <Link href="#" className="flex items-center gap-2 text-lg md:text-xl">
            <FaGlobe className="text-white" />
            <span className="text-white">EN</span>
          </Link>
            <button
              onClick={() => {
                onLogin();
                onClose();
              }}
              className=" text-white py-2 rounded-lg block "
            >
              Login
            </button>
            <Link
              href="/signup"
              onClick={onClose}
              className=" text-white py-2 rounded-lg"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
          <Link href="#" className="flex items-center gap-2 text-lg md:text-xl">
            <FaRegHeart className="text-white" />
            <span className="text-white">Wishlist</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 text-lg md:text-xl">
            <FaShoppingCart className="text-white" />
            <span className="text-white">Cart</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 text-lg md:text-xl">
            <FaGlobe className="text-white" />
            <span className="text-white">EN</span>
          </Link>
            <Link
              href="/profile"
              onClick={onClose}
              className="block py-2 text-[#C79A5F]"
            >
              My Profile
            </Link>
            <Link
              href="/saved-deals"
              onClick={onClose}
              className="block py-2 text-white"
            >
              Saved deals
            </Link>
            <Link
              href="/invite-friends"
              onClick={onClose}
              className="block py-2 text-white"
            >
              Invite friends
            </Link>
            <Link
              href="/settings"
              onClick={onClose}
              className="block py-2 text-white"
            >
              Settings
            </Link>
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="text-red-500 py-2"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Bottom section: GOE logo */}
      <div className="p-45 flex justify-center">
        <Image src={GOELogo} alt="GOE Logo" width={100} height={100} />
      </div>
    </motion.nav>
    
  );
}
