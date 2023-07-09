import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppImage } from './AppImage';

export default {
  title: 'shared/AppImage',
  component: AppImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
  <AppImage {...args} style={{ objectFit: 'cover' }} />
);

// const fallback = <Skeleton width={220} height={220} />;
// const errorFallback = <Icon width={220} height={220} Svg={EyeIcon} />;

export const Normal = Template.bind({});
Normal.args = {
  src: 'https://sun9-60.userapi.com/impg/eqo5sYxr_jyw_yWO9_pKJRMkx8WVwVENfJrecQ/1zVSkEZs5NM.jpg?size=1620x2160&quality=95&sign=73cab6427b2934395f04d96835eb3720&type=album',
  alt: 'Image avatar',
  height: 220,
  width: 220,
};
