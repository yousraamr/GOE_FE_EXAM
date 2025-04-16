'use client';

import { useState } from 'react';
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { FaGlobe, FaArrowRight, FaHeart, FaShoppingCart} from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";


interface NavigationProps {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export default function Navigation({ isAuthenticated, onLogin, onLogout }: NavigationProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Added state for dropdown

  const locations = [
    { name: "Cairo", description: "City in Egypt" },
    { name: "Alexandria", description: "City in Egypt" },
    { name: "Hurghada", description: "City in Egypt" },
    { name: "Luxor", description: "City in Egypt" },
    { name: "Aswan", description: "City in Egypt" },
  ];

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Navigation Bar */}
      <nav className="hidden md:block z-10 relative">
        <ul className="flex items-center gap-6">
          <button
            className="bg-[#444444] p-2 rounded-full"
            onClick={() => setIsSearchOpen(true)}
          >
            <IoSearchOutline className="text-[#C79A5F]" />
          </button>

          <span className="text-white">GOE</span>

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

          <button className="flex items-center gap-1 text-white">
            <FaGlobe className="text-white" />
            <span className="text-white">EN</span>
          </button>

          {/* Conditional Auth Buttons */}
          {!isAuthenticated ? (
            <>
              <button
                onClick={onLogin}
                className="bg-[#C79A5F] text-white px-4 py-2 rounded-lg hover:bg-[#b88a4b]"
              >
                Login
              </button>
              <Link
                href="/"
                className="bg-[#C79A5F] text-white px-4 py-2 rounded-lg hover:bg-[#b88a4b]"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <div className="border-l border-white h-6 mx-4"></div>
              {/* Favorite Heart and Shopping Cart Icons */}
              <FaHeart className="text-white cursor-pointer" />
              <FaShoppingCart className="text-white mx-4 cursor-pointer" />

              {/* Profile Icon and Dropdown */}
              <div className="relative">
                <FaCircleUser
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-[#C79A5F] cursor-pointer ml-4"
                />
                {isDropdownOpen && (
  <div className="absolute right-0 mt-2 w-48 bg-[#F6EEE5] rounded-lg shadow-lg z-50 text-white">
    <Link
      href="/profile"
      className="block px-4 py-2 text-[#C79A5F]"
    >
      My Profile
    </Link>
    <Link href="/saved-bundles" className="block px-4 py-2 hover:bg-[#C79A5F] text-black">
      Saved Bundles
    </Link>
    <Link href="/invite-friends" className="block px-4 py-2 hover:bg-[#C79A5F] text-black">
      Invite Friends
    </Link>
    <Link href="/settings" className="block px-4 py-2 hover:bg-[#C79A5F] text-black">Settings</Link>
    <button onClick={onLogout}
      className="bg-red-500 text-white px-4 py-2 rounded-lg">Logout</button>
  </div>
)}

              </div>
            </>
          )}
        </ul>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsSearchOpen(false)}></div>
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 pointer-events-none">
            <div className="w-[500px] pointer-events-auto">
              {/* Search Input */}
              <div className="flex items-center bg-[#333] rounded-full px-4 py-3 gap-2 text-[#C79A5F]">
                <IoSearchOutline className="text-[#C79A5F] text-xl" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none text-white placeholder-[#C79A5F] w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filtered Results */}
              <div className="bg-[#444] mt-4 rounded-xl p-4 text-white">
                {filteredLocations.length > 0 ? (
                  <>
                    <h3 className="text-[#C79A5F] mb-3">Locations</h3>
                    <ul className="space-y-4">
                      {filteredLocations.map((location) => (
                        <li key={location.name} className="flex items-start gap-4">
                          <div className="bg-[#eee] p-2 rounded-full">
                            <IoSearchOutline className="text-black" />
                          </div>
                          <div>
                            <div className="font-medium">{location.name}</div>
                            <div className="text-sm text-gray-300">{location.description}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div className="text-gray-300">No results found</div>
                )}

                {/* Footer Link */}
                {searchTerm && (
                  <div className="mt-4 border-t border-[#666] pt-2 flex justify-between items-center text-sm text-gray-300 cursor-pointer hover:text-white">
                    <span>See all results for “{searchTerm}”</span>
                    <FaArrowRight />
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
