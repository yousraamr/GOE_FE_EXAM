import AboutSection from "@/components/about-section";
import BrandApproach from "@/components/brand-approach";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TeamSection from "@/components/team-section";

import { ChakraProvider } from "@chakra-ui/react";

export default function Home(){
  return <main>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <BrandApproach/>
    <TeamSection/>
    <ContactSection/>
  </main>;
}
