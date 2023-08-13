import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher'

export default {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
    children: 'text',
  },
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  (Story) => (
    <div style={{ background: 'var(--inverted-bg-color)', height: '100vh' }}>
      <Story />
    </div>
  ),
]
