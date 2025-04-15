"use client";
import Image from "next/image";
import { useState } from "react";

import HeroBG from "@/assets/HeroBG.png";
import { FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function HeroContent() {
  // States to control the display of the location dropdown and calendar
  const [showLocations, setShowLocations] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Cairo, Egypt");
  const [showCalendar, setShowCalendar] = useState(false);

  // Array of location options
  const locations = [
    "Cairo, Egypt",
    "Hurghada, Egypt",
    "Sharm El-Sheikh, Egypt",
    "Luxor & Aswan, Egypt",
  ];

  return (
    <section className="relative w-full h-[500px]"> {/* Main section with background image */}
      {/* Background image */}
      <Image src={HeroBG} alt="Hero" fill className="object-cover" priority /> 

      <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay with transparency */}

      {/* Main content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-8 md:px-16 max-w-6xl text-white">
        {/* Heading Section */}
        <div className="mb-6 max-w-2xl">
          <div className="flex items-center text-lg md:text-xl font-medium mb-2">
            <FaLocationDot className="mr-2" /> 
            Egypt
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Hey!</h2> 
          <h2 className="text-4xl md:text-5xl font-bold">
            Tell us where you want to stay
          </h2>
          <p className="mt-4 text-lg md:text-xl">Book 450+ Curated Egyptian Hotels</p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-5xl">
          {/* Search bar container with blur effect */}
          <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md text-white rounded-full px-6 py-4 gap-4 shadow-lg w-full">
            {/* Location Selector */}
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onClick={() => setShowLocations(!showLocations)} // Toggle location dropdown
            >
              <FaLocationDot /> 
              <span>{selectedLocation}</span> {/* Display selected location */}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-white/30" /> 

            {/* Dates */}
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onClick={() => setShowCalendar(!showCalendar)} // Toggle calendar popup
            >
              <FaCalendarAlt /> {/* Calendar icon */}
              <span>19 March 2025 - 27 March 2025</span> {/* Display date range */}

              {/* Calendar Popup */}
              {showCalendar && (
                <div className="absolute top-full mt-4 left-0 z-30 bg-[#3A3A3A] text-black p-6 rounded-2xl shadow-lg w-[650px]">
                  {/* Calendar Header */}
                  <div className="flex justify-between px-2 text-white mb-4">
                    <div className="text-lg font-semibold">February 2025</div>
                    <div className="text-lg font-semibold">March 2025</div>
                  </div>

                  {/* Calendar Days Grid */}
                  <div className="grid grid-cols-14 gap-2 text-white text-sm">
                    {[...Array(58)].map((_, i) => {
                      const isHighlighted = [16, 17, 18, 19, 20, 21, 38, 39].includes(i);

                      return (
                        <div
                          key={i}
                          className={`w-10 h-10 flex items-center justify-center rounded-xl ${
                            isHighlighted ? "bg-[#F5D7A1] text-black font-semibold" : "bg-white/10"
                          }`}
                        >
                          {i < 28 ? i + 1 : i - 27} {/* Display the date */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-white/30" /> 

            {/* Guests */}
            <div className="flex items-center gap-2">
              <FaUserFriends /> 
              <span>2 Adults, 1 Child, 1 Infant</span> 
            </div>

            {/* Explore Button */}
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full px-6 py-2 ml-auto transition-all duration-200">
              Explore Stays 
            </button>
          </div>

          {/* Location Dropdown */}
          {showLocations && (
            <div className="absolute top-full mt-2 left-0 w-full bg-[#3A3A3A] rounded-3xl p-4 shadow-lg text-white z-30">
              {/* Map through locations and render them */}
              {locations.map((location, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-3 rounded-2xl hover:bg-[#505050] cursor-pointer transition-all duration-200 ${
                    selectedLocation === location ? "bg-[#505050]" : ""
                  }`}
                  onClick={() => {
                    setSelectedLocation(location); // Set selected location
                    setShowLocations(false); // Close dropdown after selection
                  }}
                >
                  <div className="bg-[#EFE6DC] rounded-xl p-3 text-black">
                    <FaLocationDot /> 
                  </div>
                  <div>
                    <p className="font-semibold">{location.split(",")[0]}</p> {/* Display location name */}
                    <p className="text-sm text-gray-300">City in Egypt</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}