import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import wihtMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/stroybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
import { ArticleRecomendationsList } from './ArticleRecomendationsList';

export default {
  title: 'features/ArticleRecomendationsList',
  component: ArticleRecomendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [wihtMock],
} as ComponentMeta<typeof ArticleRecomendationsList>;

const Template: ComponentStory<typeof ArticleRecomendationsList> = (args) => (
  <ArticleRecomendationsList {...args} />
);

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  title: 'title',
  blocks: [],
  subtitle: 'subtitle',
  views: 1233,
  type: [],
  user: { id: '2', username: 'admin' },
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=3`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    },
  ],
};
