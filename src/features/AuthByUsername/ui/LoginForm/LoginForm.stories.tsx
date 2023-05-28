import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    login: {
      username: 'main@main.ru',
      password: '123142',
    },
  }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  StoreDecorator({
    login: {
      error: true,
      username: 'main@main.ru',
      password: '1231441242',
    },
  }),
];

export const Pending = Template.bind({});
Pending.args = {};
Pending.decorators = [
  StoreDecorator({
    login: {
      username: 'main@main.ru',
      password: '123142',
      isLoading: true,
    },
  }),
];
