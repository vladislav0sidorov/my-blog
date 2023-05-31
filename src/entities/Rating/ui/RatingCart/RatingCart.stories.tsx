import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RatingCart } from './RatingCart';

export default {
  title: 'entities/RatingCart',
  component: RatingCart,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RatingCart>;

const Template: ComponentStory<typeof RatingCart> = (args) => (
  <RatingCart {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
