import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/stroybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/stroybook/ThemeDecorator/ThemeDecorator';
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

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
