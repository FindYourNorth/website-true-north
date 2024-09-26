import * as React from 'react';

// React and Next.js imports
import Image from 'next/image';

// Third-party library imports

// Local component imports
import { Section, Container, Article } from '@/components/craft';

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
      <Container>
        <Article>
          <h1 className="!mb-10 text-center !text-[40px]">
            <span className="text-muted">
              <i>About</i>
            </span>{' '}
            Us
          </h1>
          <p>
            At True North Consultants LLC, we are explorers by nature. We believe that finding the
            right solutions often means venturing into the unknown, embracing uncertainty, and
            trusting the process. Our journey is guided by a deep-seated commitment to uncovering
            the most effective paths for those we serve, whether they are social entrepreneurs,
            human service organizations, veteran service groups, or mental health providers. If
            you&apos;re helping people, we want to help you.
          </p>
          <br />
          <p>
            Our team is composed of seasoned professionals from national intelligence backgrounds,
            special operations, and combat veterans—individuals who have been trained to navigate
            the most complex landscapes with precision and discretion. We understand that technology
            is inherently disruptive, and we leverage this disruption to create meaningful change.
            By harnessing the power of technology, we help our clients overcome challenges, and
            streamline operations to align with their core mission. We handle the complexity so you
            can pour yourself into the labors of love and helping others.
          </p>
          <br />
          <p>
            We recognize that the organizations we work with are often undervalued and overstressed,
            dealing with the challenges of turnover and understaffing. Our mission is to alleviate
            these burdens by providing tailored technical solutions that empower your team. We don’t
            just deliver answers; we collaborate closely with our clients, supporting them at every
            step. Drawing from our unique experience, we work by, with, and through your team,
            ensuring that our efforts align seamlessly with your goals. Together, we’ll explore new
            possibilities and helping you stay focused on what matters most — your true north.
          </p>
        </Article>
      </Container>
    </Section>
  );
};

export default Hero;
