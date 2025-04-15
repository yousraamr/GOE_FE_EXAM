import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "@/assets/DesktopLogo.png";
import MobileLogo from "@/assets/MobileLogo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      {/* Desktop Logo: visible from md and up */}
      <div className="hidden md:block">
        <Image src={DesktopLogo} alt="Desktop Logo" width={60} height={60} />
      </div>

      {/* Mobile Logo: visible below md */}
      <div className="block md:hidden">
        <Image src={MobileLogo} alt="Mobile Logo" width={80} height={50} />
      </div>
    </Link>
  );
}
