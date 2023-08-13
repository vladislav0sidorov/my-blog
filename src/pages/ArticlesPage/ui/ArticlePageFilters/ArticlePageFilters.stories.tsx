import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticlePageFilters } from './ArticlePageFilters'

import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/ArticlePageFilters',
  component: ArticlePageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlePageFilters>

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => <ArticlePageFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
