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
    imageUrl: '/img/service.jpeg',
  },
  {
    title: 'Innovation',
    content:
      'Innovation comes naturally when you’re different by design. At True North, we don’t just think outside the box; we redefine it. Our unique approach allows us to tackle challenges in ways others can’t, driving progress through creativity and unconventional solutions. We bring a different arsenal of skills to this space.',
    imageUrl: '/img/innovation.jpeg',
  },
  {
    title: 'Commitment',
    content:
      'We believe in building lasting relationships with the organizations we serve. True North is dedicated to creating solutions that not only address today’s challenges but also grow alongside our partners. Our commitment to your success is unwavering, ensuring that our impact endures for years.',
    imageUrl: '/img/commitment.jpeg',
  },
];

const OurValues = () => {
  return (
    <Section id="our-values" className="!py-0">
      <Container className="rounded-lg bg-primary-foreground !py-8 sm:!py-12 md:!py-20">
        <Article>
          <h1 className="!mb-10 text-center !text-[40px] text-white">
            <span className="text-muted">
              <i>Our</i>
            </span>{' '}
            Values
          </h1>
        </Article>
        <div className="grid grid-cols-1 gap-9 bg-primary-foreground lg:grid-cols-3">
          {cardItems.map((item, index) => (
            <Card className="mx-auto max-w-[376px] px-1.5 py-4" key={index}>
              <CardHeader>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  unoptimized
                  width={140}
                  height={140}
                  className="!my-0 mx-auto rounded-full"
                />
                <CardTitle className="text-center !text-[28px]">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center font-sans text-base text-foreground">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurValues;
