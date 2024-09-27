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
    photoUrl: '/img/matt.jpg',
    name: 'Matt J',
    position: 'Co-Founder & Voice of Reason',
    bio: 'I’m the strategist with 20 years of military experience and a focus on operational planning and efficiency. With a business focus and experience in both the public and and private sectors, I specialize in helping organizations streamline processes and achieve their goals. As the co-founder of True North, I ensure we stay on course, delivering results that drive success. When I’m not working, I’m dedicated to empowering veterans and exploring innovative solutions to modern challenges.',
  },
  {
    photoUrl: '/img/matthew.jpeg',
    name: 'Matthew Paez, ASW',
    position: 'Founder & Good Idea Fairy',
    bio: 'I would call myself a disruptive nerd, not a disruptor. I am driven and innovative clinical social worker with a passion for integrating technology into health and human service spaces. With an MSW from USC and a background in military intelligence, I bring a unique perspective to my work, blending deep empathy with strategic problem-solving. As the founder of True North Consultants LLC, I am dedicated to unburdening social entrepreneurs, human service and veteran service organizations by empowering them with cutting-edge solutions. My approach is rooted in the values of service, innovation, and sustainability, with a focus on creating lasting impacts in the communities they serve.',
  },
  {
    photoUrl: '/img/jake.jpg',
    name: 'Jake A',
    position: 'Hostage Negotiator & Disruptor',
    bio: 'I’m a tech talent with a passion for leveraging data and innovation to solve real-world problems. After serving ten years in the US Marine Corps as a Geospatial Data Scientist within Special Operations, I transitioned my skills into the tech industry. I specialize in strategy and development, blending my operational experience with a drive for building solutions that matter. Now, I lead True North’s strategy and implementation. Beyond here, you’ll likely find me volunteering to counter human trafficking or catching waves at the beach.',
  },
];

const OurTeam = () => {
  return (
    <Section id="our-team" className="bg-primary-foreground py-[60px] md:py-[120px]">
      <Container>
        <Article>
          <div className="mb-[30px] md:pb-[60px]">
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
            <Card className="mx-auto max-w-[380px] border-0" key={index}>
              <div className="h-[278px] w-full">
                <img
                  src={item.photoUrl}
                  alt={item.name}
                  className="!my-0 mx-auto h-[278px] w-[380px] rounded-t-[20px] object-cover object-top"
                />
              </div>
              <CardHeader className="border-b !py-5">
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
