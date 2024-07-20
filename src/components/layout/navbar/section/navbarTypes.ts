export interface MenuItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: string[];
}
