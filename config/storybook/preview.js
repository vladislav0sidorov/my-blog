import { addDecorator } from '@storybook/react';

import { StyleDecorator } from '../../src/shared/config/stroybook/StyleDecorator/StyleDecorator';
import { RouteDecorator } from '../../src/shared/config/stroybook/RouteDecorator/RouteDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'LIGHT',
    list: [
      { name: 'LIGHT', class: ['app', Theme.LIGHT], color: '#ffffff' },
      { name: 'PURPLE', class: ['app', Theme.PURPLE], color: '#9000ff' },
      { name: 'DARK', class: ['app', Theme.DARK], color: '#262223' },
      { name: 'DARK_GREEN', class: ['app', Theme.DARK_GREEN], color: '#02343f' },
    ],
  },
};

addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
// addDecorator(SuspenseDecorator);
