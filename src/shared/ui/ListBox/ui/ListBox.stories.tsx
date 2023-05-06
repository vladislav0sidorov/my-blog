import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { ThemeDecorator } from 'shared/config/stroybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
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
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Georgia, content: Country.Georgia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const Default = Template.bind({});
Default.args = {
  value: options[3].value,
  label: 'Укажите страну',
  items: options,
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  value: options[3].value,
  label: 'Укажите страну',
  items: options,
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  value: options[3].value,
  label: 'Укажите страну',
  items: options,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  value: options[3].value,
  label: 'Укажите страну',
  items: options,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  label: 'Укажите страну',
  value: options[3].value,
  items: options,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  value: options[3].value,
  label: 'Укажите страну',
  items: options,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TopLeftDark = Template.bind({});
TopLeftDark.args = {
  direction: 'top left',
  value: options[3].value,
  label: 'Укажите страну',
  items: options,
};
TopLeftDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TopRightDark = Template.bind({});
TopRightDark.args = {
  direction: 'top right',
  value: options[3].value,
  label: 'Укажите страну',
  items: options,
};
TopRightDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomLeftDark = Template.bind({});
BottomLeftDark.args = {
  direction: 'bottom left',
  value: options[3].value,
  label: 'Укажите страну',
  items: options,
};
BottomLeftDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomRightDark = Template.bind({});
BottomRightDark.args = {
  direction: 'bottom right',
  label: 'Укажите страну',
  value: options[3].value,
  items: options,
};
BottomRightDark.decorators = [ThemeDecorator(Theme.DARK)];
