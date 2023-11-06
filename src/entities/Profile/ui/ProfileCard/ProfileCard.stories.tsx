import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProfileCard } from './ProfileCard'

import { Theme } from '@/app/providers/ThemeProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ThemeDecorator } from '@/shared/config/stroybook/ThemeDecorator/ThemeDecorator'
import avatar from '@/shared/assets/storybook/avatar.jpg'
import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator'
import { NewDesignDecorator } from '@/shared/config/stroybook/NewDesignDecorator/NewDesignDecorator'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
  args: {
    to: '/',
    children: 'text',
  },
} as ComponentMeta<typeof ProfileCard>

const mockData = {
  data: {
    firstname: 'Venya',
    lastname: 'Pak',
    age: 22,
    username: 'VenyaPakTV',
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Surgut',
    avatar,
  },
}

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = mockData

export const PrimaryRedesigned = Template.bind({})
PrimaryRedesigned.args = mockData
PrimaryRedesigned.decorators = [NewDesignDecorator]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = mockData
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryDarkRedesigned = Template.bind({})
PrimaryDarkRedesigned.args = mockData
PrimaryDarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)]

export const loading = Template.bind({})
loading.args = {
  isLoading: true,
}

export const loadingDark = Template.bind({})
loadingDark.args = {
  isLoading: true,
}
loadingDark.decorators = [ThemeDecorator(Theme.DARK)]

export const error = Template.bind({})
error.args = {
  error: 'error',
}

export const errorDark = Template.bind({})
errorDark.args = {
  error: 'error',
}
errorDark.decorators = [ThemeDecorator(Theme.DARK)]
