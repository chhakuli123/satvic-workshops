'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LuMenu } from 'react-icons/lu';

import { raleway } from '@/lib/fonts';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui';

import DesktopIcons from './section/DesktopIcons';
import DesktopMenu from './section/DesktopMenu';
import { menuItems } from './section/menuItemsArray';
import MobileMenu from './section/MobileMenu';

const Navbar = () => {
  return (
    <nav className={`${raleway.className} sticky top-0 z-50 bg-white px-6`}>
      <div className="flex h-[102px] items-center justify-between gap-7">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/">
            <Image
              src="/assets/svg/Satvic_Movement_logo_grey.svg"
              alt="Logo"
              width={400}
              height={400}
              className="h-[15px] w-[190px]"
              priority
            />
          </Link>
        </div>

        <DesktopMenu menuItems={menuItems} />
        <DesktopIcons />

        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-gray-500 hover:text-gray-600">
                <LuMenu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <MobileMenu menuItems={menuItems} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
