'use client';
import Image from 'next/image'; // Importing Image component for optimized image rendering
import BookNowImage from '@/assets/BookNow.png'; // Importing the 'Book Now' image asset

export default function ContactSection() {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <div className="bg-[#CFE2D4] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2B20]">
            Ready to Book Your <br className="hidden md:block" /> Next Adventure?
          </h2>
          <p className="mt-4 text-[#1F2B20] text-base md:text-lg">
            Get exclusive deals and immersive previews with our smart booking platform.
          </p>
          <button className="mt-6 bg-[#3B7D66] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#326553] transition">
            Book now
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={BookNowImage} // Image for the "Book Now" call to action
            alt="Book Now" // Alt text for accessibility
            className="object-cover w-full h-full" // Ensures the image covers the entire container
          />
        </div>
      </div>
    </div>
  );
}
