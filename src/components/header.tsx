"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Logo from "./logo";
import MobileMenuToggle from "./mobile-menu-toggle";
import MobileNav from "./mobile-nav";
import Navigation from "./navigation";
import Wrapper from "./wrapper";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Mobile nav toggle
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Auth state

  const handleClose = () => {
    setIsOpen(false); // Close mobile menu
  };

  return (
    <header className="w-full bg-[#121212] py-4 px-8 flex items-center justify-between">
      <Wrapper>
        <div className="flex items-center justify-between py-6 w-full">
          <Logo />

          {/* Desktop Navigation with login state props */}
          <Navigation
            isAuthenticated={isAuthenticated}
            onLogin={() => setIsAuthenticated(true)} // Set to true when user logs in
            onLogout={() => setIsAuthenticated(false)} // Set to false when user logs out
          />

          <MobileMenuToggle onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </Wrapper>

      <AnimatePresence>
  {isOpen && (
    <MobileNav
      onClose={handleClose}
      isOpen={isOpen}
      isAuthenticated={isAuthenticated}
      onLogin={() => setIsAuthenticated(true)}
      onLogout={() => setIsAuthenticated(false)}
    />
  )}
</AnimatePresence>

    </header>
  );
}
