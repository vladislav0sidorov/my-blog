import { ComponentStory, ComponentMeta } from '@storybook/react'

import AboutPage from './AboutPage'

import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/stroybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
    children: 'text',
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage />

export const Primary = Template.bind({})
Primary.args = {}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
