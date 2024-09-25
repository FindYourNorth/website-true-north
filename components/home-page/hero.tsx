// React and Next.js imports
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import Logo from "@/public/logo.svg";

const Hero = () => {
  return (
    <Section>
      <Container className="grid grid-cols-2 gap-10">
        <div className="flex justify-end">
          <Image
            src={Logo}
            height={300}
            alt="Company Logo"
            className="not-prose"
          />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-7xl font-sans font-semibold">FIND</p>
          <p className="text-7xl font-sans font-semibold">YOUR</p>
          <p className="text-7xl font-sans font-semibold">NORTH</p>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;

