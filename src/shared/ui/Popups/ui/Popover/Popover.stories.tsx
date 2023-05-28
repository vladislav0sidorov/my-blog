/* eslint-disable ylquiorra-plugin/path-checker */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonVariables } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import Notification from '@/shared/assets/icons/notification.svg';
import { ThemeDecorator } from '@/shared/config/stroybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Popover } from './Popover';

export default {
  title: 'shared/Popups/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 120 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

const trigger = (
  <Button theme={ButtonVariables.BACKGROUND_INVERTED}>
    <Icon Svg={Notification} />
  </Button>
);

const children = (
  <>
    <div>firts</div>
    <div>second</div>
    <div>third</div>
    <div>fourth</div>
    <div>fifth</div>
  </>
);

export const Normal = Template.bind({});
Normal.args = {
  trigger,
  children,
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  trigger,
  children,
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  trigger,
  children,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  trigger,
  children,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  trigger,
  children,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  trigger,
  children,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TopLeftDark = Template.bind({});
TopLeftDark.args = {
  direction: 'top left',
  trigger,
  children,
};
TopLeftDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TopRightDark = Template.bind({});
TopRightDark.args = {
  direction: 'top right',
  trigger,
  children,
};
TopRightDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomLeftDark = Template.bind({});
BottomLeftDark.args = {
  direction: 'bottom left',
  trigger,
  children,
};
BottomLeftDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomRightDark = Template.bind({});
BottomRightDark.args = {
  direction: 'bottom right',
  trigger,
  children,
};
BottomRightDark.decorators = [ThemeDecorator(Theme.DARK)];
