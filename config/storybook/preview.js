import { addDecorator } from '@storybook/react';

import { StyleDecorator } from '../../src/shared/config/stroybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/stroybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/stroybook/RouteDecorator/RouteDecorator';

import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
