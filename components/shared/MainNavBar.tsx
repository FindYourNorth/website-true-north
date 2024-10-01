'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/craft';
import { CONTACT_EMAIL } from '@/lib/constants';

type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    label: 'About Us',
    href: '#about-us',
  },
  {
    label: 'Our Services',
    href: '#our-services',
  },
  {
    label: 'Our Values',
    href: '#our-values',
  },
  {
    label: 'Current Projects',
    href: '#current-projects',
  },
  {
    label: 'Our Team',
    href: '#our-team',
  },
];

export default function MainNavBar() {
  return (
    <Container>
      <div className="hidden h-32 items-center justify-end gap-2 md:flex">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="mr-6 font-sans text-base font-bold !no-underline lg:mr-10 xl:mr-12"
          >
            {item.label}
          </Link>
        ))}
        <Button className="h-[60px] rounded-[20px] px-8 text-base text-background lg:px-12">
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-bold !no-underline hover:!text-white"
          >
            Contact Us
          </Link>
        </Button>
      </div>
    </Container>
  );
}
