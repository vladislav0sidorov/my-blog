import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/stroybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  width: '100%',
  height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
  height: 100,
  width: 100,
  border: '50%',
};

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  height: 100,
  width: 100,
  border: '50%',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalGreen = Template.bind({});
NormalGreen.args = {};
NormalGreen.decorators = [ThemeDecorator(Theme.DARK_GREEN)];

export const CircleGreen = Template.bind({});
CircleGreen.args = {
  height: 100,
  width: 100,
  border: '50%',
};
CircleGreen.decorators = [ThemeDecorator(Theme.DARK_GREEN)];

export const NormalPurple = Template.bind({});
NormalPurple.args = {};
NormalPurple.decorators = [ThemeDecorator(Theme.PURPLE)];

export const CirclePurple = Template.bind({});
CirclePurple.args = {
  height: 100,
  width: 100,
  border: '50%',
};
CirclePurple.decorators = [ThemeDecorator(Theme.PURPLE)];
