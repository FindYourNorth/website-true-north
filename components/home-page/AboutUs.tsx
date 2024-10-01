import * as React from 'react';

import { Section, Container, Article } from '@/components/craft';
import { Card } from '../ui/card';

const AboutUs = () => {
  return (
    <Section className="pt-[40px] md:pt-[100px]" id="about-us">
      <Container>
        <Card className="bg-primary-foreground px-[10px] py-[30px] md:p-[40px]">
          <Article>
            <div className="pb-[20px] md:pb-[30px]">
              <h1 className="text-center !text-[32px] text-background md:!text-[40px]">
                <span className="text-muted">
                  <i>About</i>
                </span>{' '}
                Us
              </h1>
            </div>
            <p className="text-center text-background">
              Our team is composed of seasoned professionals from national intelligence backgrounds,
              special operations, and combat veterans—individuals who have been trained to navigate
              the most complex landscapes with precision and discretion. We understand that
              technology is inherently disruptive, and we leverage this disruption to create
              meaningful change. By harnessing the power of technology, we help our clients overcome
              challenges, and streamline operations to align with their core mission. We handle the
              complexity so you can pour yourself into the labors of love and helping others.
              <br />
              <br />
              We recognize that the organizations we work with are often undervalued and
              overstressed, dealing with the challenges of turnover and understaffing. Our mission
              is to alleviate these burdens by providing tailored technical solutions that empower
              your team. We don’t just deliver answers; we collaborate closely with our clients,
              supporting them at every step. Drawing from our unique experience, we work by, with,
              and through your team, ensuring that our efforts align seamlessly with your goals.
              Together, we’ll explore new possibilities and helping you stay focused on what matters
              most — your true north.
            </p>
          </Article>
        </Card>
      </Container>
    </Section>
  );
};

export default AboutUs;
