import { ComponentStory, ComponentMeta } from '@storybook/react'

import { EditableProfileCardHeader } from './EditableProfileCardHeader'

import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/EditableProfileCard/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof EditableProfileCardHeader>

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
