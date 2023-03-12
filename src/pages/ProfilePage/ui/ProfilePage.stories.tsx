import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/stroybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/stroybook/ThemeDecorator/ThemeDecorator';
import avatar from 'shared/assets/test/avatar.jpg';
import ProfilePage from './ProfilePage';

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

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      data: {
        firstname: 'Venya',
        lastname: 'Pak',
        age: 22,
        username: 'VenyaPakTV',
        currency: Currency.USD,
        country: Country.Russia,
        city: 'Surgut',
        avatar,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      data: {
        firstname: 'Venya',
        lastname: 'Pak',
        age: 22,
        username: 'VenyaPakTV',
        currency: Currency.USD,
        country: Country.Russia,
        city: 'Surgut',
        avatar,
      },
    },
  }),
];
