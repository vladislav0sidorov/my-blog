import { ComponentStory, ComponentMeta } from '@storybook/react'

// eslint-disable-next-line ulbi-tv-plugin/path-checker
import { Dropdown } from './Dropdown'
import { Button } from '../../../deprecated/Button'

export default {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Normal = Template.bind({})
Normal.args = {
  trigger: <Button>Open dropdown</Button>,
  items: [
    {
      content: 'first',
      disabled: true,
      href: 'google.com',
    },
    {
      content: 'second',
      disabled: false,
      href: 'www.google.com',
    },
    {
      content: 'third',
      disabled: false,
      href: 'google.com',
    },
  ],
}
