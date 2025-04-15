"use client";

import React, { useRef } from "react"; 
import Image from "next/image"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import redSeaImg from "@/assets/RedSea.png"; // Import images for the places
import somaBayImg from "@/assets/SomaBay.png";
import gizaImg from "@/assets/Giza.png";
import nileImg from "@/assets/Nile.png";
import nabqBayImg from "@/assets/NabqBay.png";
import moazStreetImg from "@/assets/MoazStreet.png";

// Array of places to display, each with a name and image
const places = [
  { name: "Red Sea", image: redSeaImg },
  { name: "Soma Bay", image: somaBayImg },
  { name: "Giza", image: gizaImg },
  { name: "Nile", image: nileImg },
  { name: "Nabq Bay", image: nabqBayImg },
  { name: "Moaz Street", image: moazStreetImg },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null); // Use ref to access the scrollable container

  // Function to handle scrolling left or right
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250; // Scroll by 250px based on direction
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" }); // Scroll smoothly
    }
  };

  return (
    <section className="py-12 bg-[#0E0E0E] text-white">
      <div className="px-6 md:px-16">
        {/* Section title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Discover New Places</h2>

        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")} // On click, scroll to the left
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#C79A5F] p-2 rounded-full shadow-md"
          >
            <FaChevronLeft /> {/* Chevron left icon */}
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollRef} // Assign the scrollable div to the ref
            className="flex gap-4 overflow-x-auto py-2 px-6 scroll-smooth"
            style={{
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
            }}
          >
            {/* Hide scrollbar for WebKit browsers */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none; /* Chrome, Safari, Opera: Hide scrollbar */
              }
            `}</style>

            {/* Loop through places array and render each card */}
            {places.map((place, index) => (
              <div
                key={index}
                className="min-w-[180px] h-[250px] flex-shrink-0 rounded-3xl overflow-hidden relative shadow-lg"
              >
                {/* Render the image for each place */}
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover" // Ensure the image covers the entire card
                />
                {/* Name label at the bottom of the card */}
                <div className="absolute bottom-2 left-2 text-white font-medium text-sm px-3 py-1 rounded-full bg-black/50">
                  {place.name} {/* Display the place name */}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")} // On click, scroll to the right
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#C79A5F] p-2 rounded-full shadow-md"
          >
            <FaChevronRight /> {/* Chevron right icon */}
          </button>
        </div>
      </div>
    </section>
  );
}
