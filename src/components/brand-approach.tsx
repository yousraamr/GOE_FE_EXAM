import { Rotate3D } from "lucide-react"; // Importing Rotate3D icon for VR previews
import { TbPigMoney } from "react-icons/tb"; // Importing Piggy bank icon for best price deals
import { PiCursorClick } from "react-icons/pi"; // Importing Click icon for seamless booking

export default function BrandApproach() {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-start mb-12">
        Why choose <span className="text-[#D4A35F]">Egy</span>Book?
      </h2>
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {/* Seamless Booking Section */}
        <div>
          <PiCursorClick className="mx-auto text-[#3B7D66]" size={48} />
          <h3 className="text-xl font-semibold mt-4">
            <span className="text-[#D4A35F]">Seamless</span> &{" "}
            <span className="text-[#3B7D66]">Smart</span> Booking
          </h3>
          <p className="text-gray-300 mt-2">
            Quick, user-friendly platform that simplifies the reservation process
          </p>
        </div>

        {/* VR Previews Section */}
        <div>
          <Rotate3D className="mx-auto text-[#3B7D66]" size={48} />
          <h3 className="text-xl font-semibold mt-4">
            <span className="italic text-[#3B7D66]">Immersive</span> VR Previews
          </h3>
          <p className="text-gray-300 mt-2">
            Explore hotels and rooms in 360° before you book—giving you total confidence.
          </p>
        </div>

        {/* Best Price Deals Section */}
        <div>
          <TbPigMoney className="mx-auto text-[#3B7D66]" size={48} />
          <h3 className="text-xl font-semibold mt-4">
            <span className="text-[#3B7D66]">Exclusive</span> Best-Price Deals
          </h3>
          <p className="text-gray-300 mt-2">
            Save more with special offers and real-time price comparisons.
          </p>
        </div>
      </div>
    </div>
  );
}
