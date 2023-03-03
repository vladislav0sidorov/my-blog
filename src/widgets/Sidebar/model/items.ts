import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.home,
    Icon: HomeIcon,
    text: 'Home',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'About',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Profile',
  },
];
