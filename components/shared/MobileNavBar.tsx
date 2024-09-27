'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import { navItems } from './MainNavBar';
import Link from 'next/link';

export default function MobileNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="absolute right-4 top-4 md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-primary-foreground">
        <div className="flex flex-col items-start gap-4 py-10">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="link"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href={item.href} className="text-2xl font-bold text-background">
                {item.label}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
