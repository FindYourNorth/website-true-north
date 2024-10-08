import * as React from 'react';

// Local component imports
import { Section, Container, Article } from '@/components/craft';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type CardItem = {
  title: string;
  content: string;
};

const cardItems: CardItem[] = [
  {
    title: 'Grant Writing and Acquisition',
    content:
      'We secure funding to fuel your mission, crafting compelling proposals that resonate with grantors and unlock vital resources.',
  },
  {
    title: 'Solution Engineer',
    content:
      'We provide expert guidance on complex technical challenges, helping you implement strategies that drive innovation and efficiency.',
  },
  {
    title: 'Data Analytics',
    content:
      'We transform your data into powerful insights, enabling you to make data-driven decisions that propel your organization forward.',
  },
  {
    title: 'Innovation and Strategy',
    content:
      'We help you think beyond the ordinary, designing strategies that embrace disruptive technologies and foster sustainable growth.',
  },
];

const OurServices = () => {
  return (
    <Section id="our-services" className="py-[60px] md:py-[120px]">
      <Container>
        <Article>
          <div className="pb-[30px] md:pb-[60px]">
            <h1 className="text-center !text-[32px] md:!text-[40px]">
              <span className="text-muted">
                <i>Our</i>
              </span>{' '}
              Services
            </h1>
          </div>
          <p className="!text-center">
            At True North, we believe that achieving something different requires a different
            approach. Our team’s diverse expertise enables us to offer innovative, tailored
            solutions designed to meet the specific challenges of helping organizations. By
            integrating business strategy, data science, and human-centered insights, we ensure that
            our solutions are both practical and impactful. This team excels at turning uncertainty
            into opportunity because we prefer to drive change, not merely adapt to it. If we’ve
            learned anything, it’s this – tomorrow will be different.
          </p>
        </Article>
      </Container>
      <Container className="grid grid-cols-1 gap-5 pt-[30px] md:grid-cols-2 md:gap-10 md:pt-[60px]">
        {cardItems.map((item, index) => (
          <Card className="max-w-[580px] md:p-4" key={index}>
            <CardHeader>
              <CardTitle className="text-center !text-[20px] text-primary-foreground md:!text-[28px]">
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
      </Container>
    </Section>
  );
};

export default OurServices;
