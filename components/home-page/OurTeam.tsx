import * as React from 'react';

// Local component imports
import { Section, Container, Article } from '@/components/craft';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type CardItem = {
  photoUrl: string;
  name: string;
  position: string;
  bio: string;
};

const cardItems: CardItem[] = [
  {
    photoUrl: '/img/matthew.jpg',
    name: 'Matthew Paez',
    position: 'Founder & President',
    bio: 'Matt Paez is an innovative clinical social worker and a self-proclaimed "disruptive nerd" passionate about integrating technology into health and human services. With an MSW from USC and a background in military intelligence, Matt combines deep empathy with strategic problem-solving to create impactful solutions. As the founder of True North, he is dedicated to empowering social entrepreneurs, human service, and veteran organizations with cutting-edge tools, all while fostering sustainability and lasting community impact.',
  },
  {
    photoUrl: '/img/matt.jpg',
    name: 'Matthew Johnson',
    position: 'Co-Founder & Director of Operations',
    bio: 'Matt Johnson leverages 20 years of military experience to specialize in operational planning and efficiency. With a strong business focus and experience in both the public and private sectors, he helps organizations streamline processes and achieve their goals. As the co-founder of True North, Matt keeps the team on course, consistently driving success through impactful results. Outside of work, he empowers veterans and actively explores innovative solutions to modern challenges.',
  },
  {
    photoUrl: '/img/jake.jpg',
    name: 'Jake Anderson',
    position: 'Co-Founder & Director of Technology',
    bio: 'Jake Anderson is an accomplished Technology Leader with over a decade of experience in the field. After serving within the US Special Operations community, Jake transitioned his knowledge and experience in data-driven decision-making and innovative problem-solving to the software development field as a Data Scientist and Python developer. He now finds pride in leading technology strategy, product development, and innovation for forward-thinking organizations. When Jake is not working, he is dedicated to philanthropy and combating human trafficking.',
  },
];

const OurTeam = () => {
  return (
    <Section id="our-team" className="bg-primary-foreground py-[60px] md:py-[120px]">
      <Container>
        <Article>
          <div className="pb-[30px] md:pb-[60px]">
            <h1 className="text-center !text-[32px] text-white md:!text-[40px]">
              <span className="text-muted">
                <i>Meet</i>
              </span>{' '}
              Our Team
            </h1>
          </div>
        </Article>
        <div className="grid grid-cols-1 gap-[30px] bg-primary-foreground lg:grid-cols-3">
          {cardItems.map((item, index) => (
            <Card
              // Top corner rounding is to hide the background color behind the image
              className="mx-auto max-w-[380px] rounded-t-[24px] border-none bg-background"
              key={index}
            >
              <div className="h-[278px] w-full">
                <img
                  src={item.photoUrl}
                  alt={item.name}
                  className="!my-0 mx-auto h-[278px] w-[380px] rounded-t-[20px] object-cover object-top"
                />
              </div>
              <CardHeader className="border-b border-gray-300 !py-5">
                <h3 className="text-center !text-xl font-bold">{item.name}</h3>
                <span className="text-center font-sans text-base font-bold">{item.position}</span>
              </CardHeader>
              <CardContent className="!px-8 !pb-8 !pt-5">
                <p className="line-clamp-3 text-center font-sans text-base text-foreground hover:line-clamp-none">
                  {item.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurTeam;
