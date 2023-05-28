import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/stroybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Lorem Ipsum is Lorem Ipsum',
  text: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore  mipsum. Lorem Ipsum is Lorem Ipsum is Lorem',
};
export const Error = Template.bind({});
Error.args = {
  theme: TextTheme.ERROR,
  title: 'Lorem Ipsum is Lorem Ipsum',
  text: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore  mipsum. Lorem Ipsum is Lorem Ipsum is Lorem',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Lorem Ipsum is Lorem Ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore  mipsum. Lorem Ipsum is Lorem Ipsum is Lorem',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Lorem Ipsum is Lorem Ipsum',
  text: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore  mipsum. Lorem Ipsum is Lorem Ipsum is Lorem',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  theme: TextTheme.ERROR,
  title: 'Lorem Ipsum is Lorem Ipsum',
  text: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore  mipsum. Lorem Ipsum is Lorem Ipsum is Lorem',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Lorem Ipsum is Lorem Ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore  mipsum. Lorem Ipsum is Lorem Ipsum is Lorem',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeS = Template.bind({});
SizeS.args = {
  size: TextSize.S,
  title: 'Lorem Ipsum is Lorem Ipsum',
  text: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore  mipsum. Lorem Ipsum is Lorem Ipsum is Lorem',
};

export const SizeM = Template.bind({});
SizeM.args = {
  size: TextSize.M,
  title: 'Lorem Ipsum is Lorem Ipsum',
  text: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore  mipsum. Lorem Ipsum is Lorem Ipsum is Lorem',
};

export const SizeL = Template.bind({});
SizeL.args = {
  size: TextSize.L,
  title: 'Lorem Ipsum is Lorem Ipsum',
  text: 'Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore  mipsum. Lorem Ipsum is Lorem Ipsum is Lorem',
};
