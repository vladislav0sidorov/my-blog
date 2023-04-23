import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'shared/Stack/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
    </>
  ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
  children: (
    <>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
    </>
  ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
    </>
  ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  gap: '32',
  children: (
    <>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
    </>
  ),
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
  gap: '4',
  direction: 'column',
  children: (
    <>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
    </>
  ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  gap: '8',
  direction: 'column',
  children: (
    <>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
    </>
  ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  gap: '16',
  direction: 'column',
  children: (
    <>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
    </>
  ),
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
  gap: '32',
  direction: 'column',
  children: (
    <>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
      <div className="">тестовый текст</div>
    </>
  ),
};
