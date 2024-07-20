import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuChevronDown } from 'react-icons/lu';

import { Button, SheetTitle } from '@/components/ui';

import { icons } from './DesktopIcons';
import { MenuItem } from './navbarTypes';

interface MobileMenuProps {
  menuItems: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleDropdown = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div className="py-4">
      <SheetTitle>Menu</SheetTitle>
      {menuItems.map((item) => (
        <div key={item.name}>
          <button
            onClick={() => item.hasDropdown && toggleDropdown(item.name)}
            className="flex w-full items-center justify-between rounded-md px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            {item.name}
            {item.hasDropdown && (
              <LuChevronDown
                size={18}
                className={`ml-2 transition-transform duration-300 ease-in-out ${
                  expandedItems.includes(item.name) ? 'rotate-180' : ''
                }`}
              />
            )}
          </button>
          {item.hasDropdown && expandedItems.includes(item.name) && (
            <ul className="ml-4 mt-1">
              {item.dropdownItems?.map((dropdownItem, index) => (
                <li key={index} className="py-1">
                  <Link
                    href={`${item.href}/${dropdownItem
                      .toLowerCase()
                      .replace(/ /g, '-')}`}
                  >
                    <span className="text-sm text-gray-600 hover:text-gray-900">
                      {dropdownItem}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className="mt-auto border-t border-gray-200 pt-6">
        <div className="flex items-center">
          {icons.map((icon, index) => (
            <Button key={index} variant="ghost" size="icon">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={28}
                height={28}
                className="h-5 w-5"
              />
            </Button>
          ))}
        </div>{' '}
      </div>
    </div>
  );
};

export default MobileMenu;
