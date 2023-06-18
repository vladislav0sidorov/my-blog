import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

import Avatar from '@/shared/assets/test/avatar.jpg';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  isLoading: false,
  comments: [
    {
      id: '1',
      text: 'text1',
      user: {
        id: '1',
        username: 'userName',
        avatar: Avatar,
      },
    },
    {
      id: '2',
      text: 'text2',
      user: {
        id: '2',
        username: 'userName2',
        avatar: Avatar,
      },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};

export const NoComments = Template.bind({});
NoComments.args = {};
