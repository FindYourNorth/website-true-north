import * as React from 'react';

// Local component imports
import { Section, Container, Article } from '@/components/craft';
import { Card, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const CurrentProjects = () => {
  return (
    <Section id="current-projects" className="py-[120px]">
      <Container>
        <Article>
          <div className="mb-[60px]">
            <h1 className="text-center !text-[40px]">
              <span className="text-muted">
                <i>Current</i>
              </span>{' '}
              Projects
            </h1>
          </div>
        </Article>
        <div className="grid grid-cols-1 gap-9">
          <Card className="grid w-full grid-cols-1 p-10 sm:grid-cols-4 sm:gap-[60px]">
            <div className="col-span-1">
              <Image
                src="/img/sof-network.jpeg"
                alt="SOF Network"
                unoptimized
                width={250}
                height={250}
                className="!my-0"
              />
            </div>
            <div className="col-span-1 sm:col-span-3">
              <CardTitle className="!text-[28px]">SOF Network, 501(c)(3)</CardTitle>
              <p className="!py-5 font-sans text-xl text-foreground">
                The project that inspired it all—our true north. It’s more than just a mission; it’s
                a deeply personal endeavor born from the pain of losing friends during the current
                veteran suicide epidemic. Through our support to the SOF Network, we aim to increase
                accessibility, resources, raise awareness, and destigmatize the mental health
                challenges faced by our veterans. This is our promise to never stop fighting for
                those who fought for us.
              </p>
              <div className="mt-5 flex justify-start gap-4">
                <Button variant="outline" size="xl">
                  <Link
                    href="https://experience.arcgis.com/experience/65740fda4f5f4e309285cd8a47f90700/"
                    target="_blank"
                    className="!no-underline"
                  >
                    Search by State Code
                  </Link>
                </Button>
                <Button variant="outline" size="xl">
                  <Link
                    href="https://experience.arcgis.com/experience/1bd4b0301a724dedbaff11fc7c2990f1/"
                    target="_blank"
                    className="!no-underline"
                  >
                    Search by Map
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
          <Card className="grid w-full grid-cols-1 p-10 sm:grid-cols-4 sm:gap-[60px]">
            <div className="col-span-1">
              <Image
                src="/img/chips.jpeg"
                alt="CHIPS"
                unoptimized
                width={250}
                height={250}
                className="!my-0"
              />
            </div>
            <div className="col-span-1 sm:col-span-3">
              <CardTitle className="!text-[28px]">
                CHIPS - Connected Healing Integrated Peer Support
              </CardTitle>
              <p className="!py-5 font-sans text-xl text-foreground">
                A digital system designed to transform Veterans Treatment Courts by combining the
                tradition of military challenge coins with sobriety chips. Pursuing federal grant
                funding for statewide implementation for maximum impact. CHIPS uses a bottom-up
                approach to community counseling that synchronizes information reporting creating a
                system where privacy and responsibility intersect - critical elements to delivering
                effective veteran support.
              </p>
            </div>
          </Card>
          <Card className="grid w-full grid-cols-1 p-10 sm:grid-cols-4 sm:gap-[60px]">
            <div className="col-span-1">
              <Image
                src="/img/placeholder.svg"
                alt="Project Dead Arm"
                unoptimized
                width={250}
                height={250}
                className="!my-0"
              />
            </div>
            <div className="col-span-1 sm:col-span-3">
              <CardTitle className="!text-[28px]">Project Dead Arm</CardTitle>
              <p className="!py-5 font-sans text-xl text-foreground">
                A nationwide initiative centered on collecting data to assess disparities in veteran
                service frameworks and resources. A skill repurposing of skills honed in our
                previous careers to create actionable intelligence in a new space. Leveraging these
                insights, Project Dead Arm aims to standardize and enhance support for veterans
                across the country, ensuring equitable access for all.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default CurrentProjects;
