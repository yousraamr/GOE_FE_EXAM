'use client';
import { Swiper, SwiperSlide } from 'swiper/react'; // Importing Swiper and SwiperSlide for the carousel functionality
import { Navigation } from 'swiper/modules'; // Importing Navigation module for slide navigation
import 'swiper/css';
import 'swiper/css/navigation'; // Importing navigation styles for Swiper
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Importing arrow icons for navigation buttons

// Import your images
import Cairo from '@/assets/Cairo.png';
import Hurghada from '@/assets/Hurghada.png';
import Sharm from '@/assets/SharmElSheikh.png';

// Array of destination data with details for each destination
const destinations = [
  {
    name: 'Cairo',
    description: 'Unveil secrets of ancient wonders.',
    image: Cairo,
    color: 'from-[#ED7D31]/70 to-transparent', 
  },
  {
    name: 'Hurghada',
    description: 'Sunshine, beaches, and vibrant reefs.',
    image: Hurghada,
    color: 'from-[#0066CC]/60 to-transparent', 
  },
  {
    name: 'Sharm',
    description: 'Dive into breathtaking underwater views.',
    image: Sharm,
    color: 'from-[#A8324A]/60 to-transparent', 
  },
];

export default function TeamSection() {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Trending Destinations</h2>
      
      <div className="relative">
        <Swiper
          modules={[Navigation]} // Enabling navigation controls in Swiper
          slidesPerView={1.2} // Setting initial number of slides visible
          spaceBetween={16} // Setting space between slides
          breakpoints={{
            768: { slidesPerView: 2.2 }, // Number of slides visible on tablets
            1024: { slidesPerView: 3 }, // Number of slides visible on desktops
          }}
          navigation={{ // Setting custom navigation elements
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
        >
          {destinations.map((dest, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative rounded-3xl overflow-hidden h-[420px] flex flex-col justify-end p-6 bg-cover bg-center"
                style={{ backgroundImage: `url(${dest.image.src})` }} // Setting background image for each destination
              >
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.color}`} /> 
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold">{dest.name}</h3>
                  <p className="mt-1 text-lg">{dest.description}</p>
                  <button className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded-full">
                    See Hotels
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center">
          <ChevronLeft className="text-[#D4A35F]" />
        </button>
        <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center">
          <ChevronRight className="text-[#D4A35F]" />
        </button>
      </div>
    </div>
  );
}
