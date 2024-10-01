import * as React from 'react';

// Local component imports
import { Section, Container } from '@/components/craft';

const bannerTextClassName =
  'text-primary-foreground font-bold font-sans text-5xl leading-[44px] md:text-[116px] md:leading-[100px] md:tracking-tighter tracking-tight';

const Hero = () => {
  return (
    <Section className="pt-[100px] md:pt-[120px]">
      <Container className="flex items-end justify-center">
        <img src="/logo.svg" alt="Logo" className="not-prose h-[132px] md:h-[300px]" />
        <p className={bannerTextClassName}>
          FIND <br /> YOUR <br /> NORTH
        </p>
      </Container>
    </Section>
  );
};

export default Hero;
