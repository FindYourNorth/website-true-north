import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Icon imports
import { Linkedin } from 'lucide-react';

// Local component imports
import { Section, Container } from '../craft';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <Section className="py-[60px] md:pt-[80px]">
        <Container className="grid gap-8">
          <div className="flex flex-col">
            <h1 className="!text-[32px] font-bold !leading-snug text-primary-foreground md:!text-[40px]">
              Get in touch with us
            </h1>
            <p className="pt-2 font-sans text-base">
              Got questions about us? Our team is here to help.
            </p>
          </div>
          <div className="not-prose flex flex-wrap justify-start gap-5">
            <Button variant="dark" size="xl" className="w-full md:w-fit">
              Contact Us
            </Button>
            <Button variant="outline" size="xl" className="w-full md:w-fit">
              <Link
                href="https://truenorthconsultants.atlassian.net/servicedesk/customer/portal/2"
                target="_blank"
              >
                Submit a Ticket
              </Link>
            </Button>
          </div>
          <Separator className="bg-muted" />
          <div className="not-prose flex items-center justify-between md:flex-row md:gap-2">
            <p className="font-sans text-sm text-muted-foreground">
              © {new Date().getFullYear()} True North Consultants. All rights reserved.
            </p>
            <Button variant="outline" size="icon">
              <Link
                href="https://www.linkedin.com/company/true-north-consultants-llc/"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
