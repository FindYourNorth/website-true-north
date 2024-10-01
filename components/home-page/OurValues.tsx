import * as React from 'react';

// Local component imports
import { Section, Container, Article } from '@/components/craft';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

type CardItem = {
  title: string;
  content: string;
  imageUrl: string;
};

const cardItems: CardItem[] = [
  {
    title: 'Service',
    content:
      'It is in our DNA. Founded by 100% retired Marines, True North is built on a legacy of commitment and dedication. Serving others isn’t just what we do—it’s who we are. Our mission is to continue that service by empowering organizations to achieve their goals and make a lasting impact.',
    imageUrl: '/img/service.svg',
  },
  {
    title: 'Innovation',
    content:
      'Innovation comes naturally when you’re different by design. At True North, we don’t just think outside the box; we redefine it. Our unique approach allows us to tackle challenges in ways others can’t, driving progress through creativity and unconventional solutions. We bring a different arsenal of skills to this space.',
    imageUrl: '/img/innovation.svg',
  },
  {
    title: 'Commitment',
    content:
      'We believe in building lasting relationships with the organizations we serve. True North is dedicated to creating solutions that not only address today’s challenges but also grow alongside our partners. Our commitment to your success is unwavering, ensuring that our impact endures for years.',
    imageUrl: '/img/commitment.svg',
  },
];

const OurValues = () => {
  return (
    <Section id="our-values" className="bg-primary-foreground py-[60px] md:py-[120px]">
      <Container>
        <Article>
          <div className="pb-[30px] md:pb-[60px]">
            <h1 className="text-center !text-[32px] text-white md:!text-[40px]">
              <span className="text-muted">
                <i>Our</i>
              </span>{' '}
              Values
            </h1>
          </div>
        </Article>
        <div className="grid grid-cols-1 gap-9 bg-primary-foreground lg:grid-cols-3">
          {cardItems.map((item, index) => (
            <Card className="mx-auto max-w-[376px] bg-background md:px-1.5 md:py-4" key={index}>
              <CardHeader>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  unoptimized
                  width={82}
                  height={82}
                  className="!my-0 mx-auto"
                />
                <CardTitle className="!mt-[20px] text-center !text-[24px] text-primary-foreground md:!mt-[30px] md:!text-[28px]">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center font-sans text-sm text-foreground md:text-base">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurValues;
