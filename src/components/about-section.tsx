"use client"; // Indicating that this component should be rendered on the client-side (Next.js feature).

import kempinskiHotel from "@/assets/kempinskiHotel.png"; // Importing images for the hotels
import JWMarriotHotel from "@/assets/JWMarriotHotel.png"; // Importing another hotel image
import { Swiper, SwiperSlide } from "swiper/react"; // Importing Swiper components for carousel functionality
import { Navigation } from "swiper/modules"; // Importing the Navigation module from Swiper for custom navigation
import "swiper/css"; // Importing Swiper CSS styles
import "swiper/css/navigation"; // Importing specific styles for the navigation component
import Image from "next/image"; // Importing Next.js Image component for optimized image handling
import { FaHeart, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons from react-icons
import { useRef, useEffect } from "react"; // Importing React hooks
import SwiperCore from "swiper"; // Importing SwiperCore for referencing the swiper instance

// Defining an array of hotel objects to display in the carousel
const hotels = [
  {
    id: 1,
    image: kempinskiHotel,
    location: "Soma Bay",
    name: "Kempinski Hotel Soma Bay",
    price: "$214",
    rating: 4.7,
    reviews: 1274,
  },
  {
    id: 2,
    image: JWMarriotHotel,
    location: "Cairo",
    name: "JW Marriott Hotel Cairo",
    price: "$194",
    rating: 4.6,
    reviews: 2274,
  },
  {
    id: 3,
    image: kempinskiHotel,
    location: "Soma Bay",
    name: "Kempinski Hotel Soma Bay",
    price: "$214",
    rating: 4.7,
    reviews: 1274,
  },
];

// The main component for the hotel carousel
export default function HotelSlider() {
  // Using useRef to store a reference to the Swiper instance
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="py-10 bg-black text-white relative"> {/* Main section with padding, background color, and text styling */}
      <div className="px-6 md:px-20"> {/* Adding horizontal padding for responsiveness */}
        <h2 className="text-2xl font-bold mb-6">The Most Relevant</h2> {/* Heading for the carousel */}

        {/* Custom left navigation arrow button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()} // Navigate to previous slide when clicked
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[#C79A5F] p-2 rounded-full shadow-md"
        >
          <FaChevronLeft /> {/* Icon for left arrow */}
        </button>

        {/* Custom right navigation arrow button */}
        <button
          onClick={() => swiperRef.current?.slideNext()} // Navigate to next slide when clicked
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[#C79A5F] p-2 rounded-full shadow-md"
        >
          <FaChevronRight /> {/* Icon for right arrow */}
        </button>

        {/* Swiper component: main carousel functionality */}
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper; // Assigning Swiper instance to the reference before initialization
          }}
          slidesPerView={1.2} // Setting initial slides per view to be slightly more than 1
          spaceBetween={20} // Adding space between slides
          modules={[Navigation]} // Enabling the Navigation module for custom arrows
          breakpoints={{ // Responsive design for different screen sizes
            640: { slidesPerView: 1.5 }, // For screens 640px and up
            768: { slidesPerView: 2.5 }, // For screens 768px and up
            1024: { slidesPerView: 3.2 }, // For screens 1024px and up
          }}
        >
          {/* Looping through hotels array to generate individual hotel cards */}
          {hotels.map((hotel) => (
            <SwiperSlide key={hotel.id}> {/* Each hotel is placed in a SwiperSlide component */}
              <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg relative">
                {/* Hotel image section */}
                <div className="relative h-[200px] w-full">
                  <Image
                    src={hotel.image} // Displaying the hotel's image
                    alt={hotel.name} // Image alt text is the hotel's name for accessibility
                    fill // Ensuring the image fills the container
                    style={{ objectFit: "cover" }} // Styling the image to cover the container
                  />
                  <div className="absolute top-3 left-3 bg-white text-black text-sm px-3 py-1 rounded-full font-semibold">
                    {hotel.location} {/* Displaying the hotel's location */}
                  </div>
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full text-gray-600 hover:text-red-500">
                    <FaHeart /> {/* Favorite button with a heart icon */}
                  </button>
                </div>

                {/* Hotel details section */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{hotel.name}</h3> {/* Hotel name */}
                  <p className="text-sm text-gray-600">
                    From {hotel.price} per person {/* Price per person */}
                  </p>
                  <div className="flex items-center mt-2 text-sm text-gray-800 font-medium">
                    <FaStar className="text-yellow-500 mr-1" /> {/* Star icon for rating */}
                    {hotel.rating} ({hotel.reviews.toLocaleString()}) {/* Rating and number of reviews */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
