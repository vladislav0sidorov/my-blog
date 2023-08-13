import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { EditableProfileCard } from './EditableProfileCard'

import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/EditableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}
