import Image from 'next/image';

import { Button } from '@/components/ui';

export const icons = [
  { src: '/assets/icons/search_icon.svg', alt: 'Search' },
  { src: '/assets/icons/globe_icon.svg', alt: 'Language' },
  { src: '/assets/icons/avatar.svg', alt: 'User' },
  { src: '/assets/icons/cart__icon.svg', alt: 'Cart' },
];

const DesktopIcons = () => {
  return (
    <div className="hidden items-center xl:flex">
      {icons.map((icon, index) => (
        <Button key={index} variant="ghost" size="icon" className="h-7 w-7">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={18}
            height={18}
            className="h-[18px] w-[18px]"
          />
        </Button>
      ))}
    </div>
  );
};

export default DesktopIcons;
