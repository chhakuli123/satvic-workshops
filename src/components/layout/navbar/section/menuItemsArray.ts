import { MenuItem } from './navbarTypes';

export const menuItems: MenuItem[] = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'WORKSHOPS', href: '/workshops' },
  {
    name: 'FOOD BOOKS',
    href: '/food-books',
    hasDropdown: true,
    dropdownItems: [
      'Satvic Food Book 1',
      'Satvic Food Book 2',
      'Satvic Indian Food Book',
      'Combo Pack of 2 Books',
      'Combo Pack of 3 Books',
    ],
  },
  {
    name: 'PRODUCTS',
    href: '/products',
    hasDropdown: true,
    dropdownItems: [
      'Enema Kit',
      'Wet Pack',
      'Sprout Kit',
      'Nut Milk Bag Pack of 2',
      'Kitchen Kit',
      'Satvic Starter Kit',
      'Satvic Food Book 1',
      'Satvic Food Book 2',
      'Satvic Indian Food Book',
      'Combo Pack of 2 Books',
      'Combo Pack of 3 Books',
      'Clay Ware',
    ],
  },
  { name: 'VIDEOS', href: '/videos' },
  {
    name: 'HEALING STORIES',
    href: '/healing-stories',
    hasDropdown: true,
    dropdownItems: ['View all Healing Stories', 'Share Your Healing Story'],
  },
  { name: 'CONTACT US', href: '/contact' },
  { name: 'WORKSHOP LOGIN', href: '/workshop-login' },
];
