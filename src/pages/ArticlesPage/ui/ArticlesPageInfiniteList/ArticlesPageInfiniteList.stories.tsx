import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator';
import { ArticlesPageInfiniteList } from './ArticlesPageInfiniteList';

export default {
  title: 'pages/ArticlesPageInfiniteList',
  component: ArticlesPageInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlesPageInfiniteList>;

const Template: ComponentStory<typeof ArticlesPageInfiniteList> = (args) => (
  <ArticlesPageInfiniteList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
