"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Logo from "./logo";
import MobileMenuToggle from "./mobile-menu-toggle";
import MobileNav from "./mobile-nav";
import Navigation from "./navigation";
import Wrapper from "./wrapper";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Manage state to track if the mobile menu is open or closed
  const handleClose = () => {
    setIsOpen(false); // Function to close the mobile menu
  };

  return (
    <header className="bg-[#121212] text-white shadow-md">
      <Wrapper> {/* Wrapper for consistent padding and layout */}
        <div className="flex items-center justify-between py-6">
          <Logo /> {/* Display the logo on the left side of the header */}
          
          {/* Desktop Navigation */}
          <Navigation /> {/* This component will render the desktop navigation links */}

          {/* Mobile Navigation Toggle */}
          <MobileMenuToggle onToggle={() => setIsOpen(!isOpen)} /> {/* Button to toggle mobile menu */}
        </div>
      </Wrapper>

      {/* Animate mobile navigation menu */}
      <AnimatePresence>
        {isOpen && <MobileNav onClose={handleClose} isOpen={isOpen} />} {/* Show mobile nav if isOpen is true */}
      </AnimatePresence>
    </header>
  );
}