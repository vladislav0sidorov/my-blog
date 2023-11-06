import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CommentCard } from './CommentCard'

import Avatar from '@/shared/assets/storybook/avatar.jpg'
import { FeatureFlagDecorator } from '@/shared/config/stroybook/FeatureFlagDecorator/FeatureFlagDecorator'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

const normalArgs = {
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
}

export const Normal = Template.bind({})
Normal.args = normalArgs

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = normalArgs
NormalRedesigned.decorators = [FeatureFlagDecorator({ isAppRedesigned: true })]

export const Loading = Template.bind({})
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
}
