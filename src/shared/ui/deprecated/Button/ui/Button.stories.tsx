import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonSizes, ButtonVariables } from './Button'

import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/stroybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonVariables.CLEAR,
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Text',
  theme: ButtonVariables.CLEAR_INVERTED,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonVariables.OUTLINE,
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonVariables.OUTLINE,
  size: ButtonSizes.L,
}
export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: 'Text',
  theme: ButtonVariables.OUTLINE,
  size: ButtonSizes.XL,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonVariables.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
  children: 'Text',
  theme: ButtonVariables.BACKGROUND,
}

export const InvertedBackground = Template.bind({})
InvertedBackground.args = {
  children: 'Text',
  theme: ButtonVariables.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  square: true,
  theme: ButtonVariables.BACKGROUND_INVERTED,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  square: true,
  size: ButtonSizes.L,
  theme: ButtonVariables.BACKGROUND_INVERTED,
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: '>',
  square: true,
  size: ButtonSizes.XL,
  theme: ButtonVariables.BACKGROUND_INVERTED,
}

export const DisabledSizeXL = Template.bind({})
DisabledSizeXL.args = {
  children: '>',
  square: true,
  size: ButtonSizes.XL,
  theme: ButtonVariables.BACKGROUND_INVERTED,
  disabled: true,
}
