import * as React from 'react';

// Local component imports
import { Section, Container } from '@/components/craft';

const bannerTextClassName =
  'text-primary-foreground font-bold font-sans sm:text-[90px] sm:leading-[105px] text-[48px] leading-[64px] tracking-tight';

const Hero = () => {
  return (
    <Section className="pt-[120px]">
      <Container className="flex justify-center gap-4">
        <img src="/logo.svg" alt="Logo" className="not-prose h-[180px] sm:h-[300px]" />
        <div className="flex flex-col items-start justify-center">
          <p className={bannerTextClassName}>
            FIND <br /> YOUR <br /> NORTH
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
