import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Navbar } from './Navbar'

import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/stroybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const AuthLight = Template.bind({})
AuthLight.args = {}
AuthLight.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
]

export const AuthDark = Template.bind({})
AuthDark.args = {}
AuthDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })]
