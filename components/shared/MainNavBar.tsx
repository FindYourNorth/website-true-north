'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/craft';

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
    <Container className="!py-0">
      <div className="hidden h-[100px] items-center justify-end gap-2 md:flex">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="mr-12 font-sans text-base font-bold !no-underline"
          >
            {item.label}
          </Link>
        ))}
        <Button className="h-[60px] rounded-[20px] px-12 font-sans text-base font-bold text-white">
          Contact Us
        </Button>
      </div>
    </Container>
  );
}
