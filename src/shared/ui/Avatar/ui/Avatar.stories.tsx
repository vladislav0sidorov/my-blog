import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import storybookAvatar from './storybookAvatar.jpeg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 300,
  src: storybookAvatar,
};

export const Default = Template.bind({});
Default.args = {
  src: storybookAvatar,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: storybookAvatar,
};
