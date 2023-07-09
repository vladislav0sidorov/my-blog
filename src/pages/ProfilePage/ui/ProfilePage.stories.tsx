import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/stroybook/ThemeDecorator/ThemeDecorator';
import avatar from '@/shared/assets/storybook/avatar.jpg';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
    children: 'text',
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

const formData = {
  firstname: 'Venya',
  lastname: 'Pak',
  age: 22,
  username: 'VenyaPakTV',
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Surgut',
  avatar,
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: formData,
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: formData,
    },
  }),
];
