import { ComponentStory, ComponentMeta } from '@storybook/react'

import HomePage from './HomePage'

import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/stroybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/HomePage',
  component: HomePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
    children: 'text',
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => <HomePage />

export const Primary = Template.bind({})
Primary.args = {}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
