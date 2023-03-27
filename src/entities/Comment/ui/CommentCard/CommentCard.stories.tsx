import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from 'shared/assets/test/avatar.jpg';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  isLoading: false,
  comment: {
    id: '1',
    text: 'text1',
    user: {
      id: '1',
      username: 'userName',
      avatar: Avatar,
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    id: '1',
    text: 'text1',
    user: {
      id: '1',
      username: 'userName',
      avatar: Avatar,
    },
  },
};
