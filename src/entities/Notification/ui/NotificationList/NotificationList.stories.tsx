import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/stroybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
);

const mockNotificationsData = [
  {
    id: '1',
    title: 'Уведомление 1',
    description: 'Описание под 1 уведомление',
  },
  {
    id: '2',
    title: 'Уведомление 2',
    description: 'Описание под 2 уведомление',
  },
  {
    id: '3',
    title: 'Уведомление 3',
    description: 'Описание под 3 уведомление',
  },
  {
    id: '4',
    title: 'Уведомление 4',
    description: 'Описание под 4 уведомление',
  },
];

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: mockNotificationsData,
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
Dark.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: mockNotificationsData,
    },
  ],
};
