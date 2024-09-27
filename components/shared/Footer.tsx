// React and Next.js imports

// Third-party library imports
import Balancer from 'react-wrap-balancer';

// UI component imports
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Icon imports
import { Linkedin } from 'lucide-react';

// Local component imports
import { Section, Container } from '../craft';

export default function Footer() {
  return (
    <footer>
      <Section className="pb-[60px] pt-20">
        <Container className="grid gap-8">
          <div className="not-prose flex flex-col">
            <h1 className="!text-[40px] font-bold text-primary-foreground">Get in touch with us</h1>
            <p>
              <Balancer>Got questions about us? Our team is here to help.</Balancer>
            </p>
          </div>
          <div className="not-prose flex justify-start gap-5">
            <Button variant="dark" size="xl">
              Contact Us
            </Button>
            <Button variant="outline" size="xl">
              Submit a Ticket
            </Button>
          </div>
          <Separator className="bg-muted" />
          <div className="not-prose flex justify-between md:flex-row md:items-center md:gap-2">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} True North Consultants LLC
            </p>
            <Button variant="outline" size="icon">
              <Linkedin />
            </Button>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
