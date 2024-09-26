import * as React from 'react';

// React and Next.js imports
import Image from 'next/image';

// Third-party library imports

// Local component imports
import { Section, Container } from '@/components/craft';

// Asset imports
import Logo from '@/public/logo.svg';

const bannerTextClassName =
  'text-primary-foreground font-sans text-[90px] font-bold leading-tight tracking-tight';

const Hero = () => {
  return (
    <Section>
      <Container className="grid grid-cols-2 gap-10">
        <div className="flex justify-end">
          <Image src={Logo} height={300} alt="Company Logo" className="not-prose" />
        </div>
        <div className="flex flex-col justify-center">
          <p className={bannerTextClassName}>
            FIND <br /> YOUR <br /> NORTH
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
