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

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  label: 'Укажите страну',
  value: options[3].value,
  items: options,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
