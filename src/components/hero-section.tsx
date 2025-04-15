import HeroContent from "./hero-content";
import Wrapper from "./wrapper";

export default function HeroSection() {
    return <section className="w-full bg-pattern">
        <Wrapper>
            <HeroContent />
        </Wrapper>
    </section>;
}