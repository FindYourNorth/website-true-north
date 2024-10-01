import * as React from 'react';

// Local component imports
import { Section, Container } from '@/components/craft';

const bannerTextClassName =
  'text-primary-foreground font-bold md:font-black font-sans text-5xl leading-[44px] md:text-8xl xl:text-[120px] leading-[108px] md:tracking-tighter tracking-tight';

const Hero = () => {
  return (
    <Section className="pt-[100px]">
      <Container className="flex justify-between md:gap-8 xl:gap-12">
        <div className="max-w-[800px]">
          <div className="flex items-end justify-center md:justify-start">
            <img src="/logo.svg" alt="Logo" className="not-prose h-[132px] md:hidden" />
            <p className={bannerTextClassName}>
              FIND <br /> YOUR <br /> NORTH
            </p>
          </div>
          <p className="pt-10 text-center text-base md:text-left md:text-xl">
            At True North Consultants LLC, we are explorers by nature. We believe that finding the
            right solutions often means venturing into the unknown, embracing uncertainty, and
            trusting the process. Our journey is guided by a deep-seated commitment to uncovering
            the most effective paths for those we serve, whether they are social entrepreneurs,
            human service organizations, veteran service groups, or mental health providers. If
            you’re helping people, we want to help you.
          </p>
        </div>
        <div className="hidden shrink-0 md:block md:w-80 xl:w-[352px]">
          <img src="/logo.svg" alt="Logo" className="not-prose" />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
