import React, { useState } from 'react';
import Link from 'next/link';
import { LuChevronDown } from 'react-icons/lu';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui';

import { MenuItem } from './navbarTypes';

interface DesktopMenuProps {
  menuItems: MenuItem[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const renderMenuItem = (item: MenuItem) => {
    if (item.hasDropdown) {
      return (
        <Popover
          key={item.name}
          open={hoveredItem === item.name}
          onOpenChange={(open) => {
            if (open) setHoveredItem(item.name);
            else setHoveredItem(null);
          }}
        >
          <PopoverTrigger asChild>
            <button
              className="flex items-center text-sm font-semibold tracking-[1px] text-base-900"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.name}
              <LuChevronDown
                size={18}
                className={`ml-2 transition-transform duration-300 ease-in-out ${
                  hoveredItem === item.name ? 'rotate-180' : ''
                }`}
              />
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="max-h-60 w-auto overflow-y-auto p-0"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <ul className="py-2">
              {item.dropdownItems?.map((dropdownItem, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100">
                  <Link
                    href={`${item.href}/${dropdownItem
                      .toLowerCase()
                      .replace(/ /g, '-')}`}
                  >
                    <span className="text-sm">{dropdownItem}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      );
    }
    return (
      <Link key={item.name} href={item.href}>
        <span className="text-sm font-semibold tracking-[1px] text-base-900">
          {item.name}
        </span>
      </Link>
    );
  };

  return (
    <div className="hidden flex-wrap items-center justify-center space-x-6 xl:flex">
      {menuItems.map(renderMenuItem)}
    </div>
  );
};

export default DesktopMenu;
