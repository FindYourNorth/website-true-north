import * as React from 'react';

// Local component imports
import { Section, Container } from '@/components/craft';

const bannerTextClassName =
  'text-primary-foreground font-black font-sans text-[120px] leading-[108px] tracking-tighter';

const Hero = () => {
  return (
    <Section className="pt-[120px]">
      <Container className="flex justify-between gap-12">
        <div>
          <p className={bannerTextClassName}>
            FIND <br /> YOUR <br /> NORTH
          </p>
        </div>
        <div>
          <img src="/logo.svg" alt="Logo" className="not-prose h-[180px] sm:h-[300px]" />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
