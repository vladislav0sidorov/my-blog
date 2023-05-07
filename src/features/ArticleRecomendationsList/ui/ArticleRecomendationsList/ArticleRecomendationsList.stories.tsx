import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRecomendationsList } from './ArticleRecomendationsList';

export default {
  title: 'features/ArticleRecomendationsList',
  component: ArticleRecomendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleRecomendationsList>;

const Template: ComponentStory<typeof ArticleRecomendationsList> = (args) => <ArticleRecomendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
