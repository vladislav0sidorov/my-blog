import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProdileCardHeader } from './EditableProdileCardHeader';

export default {
  title: 'features/EditableProfileCard/EditableProdileCardHeader',
  component: EditableProdileCardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProdileCardHeader>;

const Template: ComponentStory<typeof EditableProdileCardHeader> = (args) => (
  <EditableProdileCardHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
