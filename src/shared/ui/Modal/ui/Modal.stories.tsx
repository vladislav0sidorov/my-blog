import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal } from './Modal'

import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/stroybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Light = Template.bind({})
Light.args = {
  isOpen: true,
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati excepturi laudantium alias maxime, in delectus necessitatibus saepe eum nostrum quam numquam laboriosam fugiat quia veniam fugit nobis nemo earum voluptatem qui. Quaerat, quisquam esse! Consequatur soluta doloribus labore iusto nostrum id reprehenderit. Animi, aliquam voluptates. Doloribus illo temporibus rem quaerat, numquam eligendi consectetur distinctio laborum dolor pariatur, nihil tenetur, eos placeat! Doloremque, dolorem impedit! Quas porro repudiandae perferendis eligendi unde sapiente possimus, deserunt dolore eveniet nostrum dicta dolorem tenetur amet perspiciatis dolor. Perspiciatis voluptate ut unde praesentium harum ipsum aliquam dignissimos? Dolores magnam, est expedita blanditiis fugiat nobis sed debitis.',
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati excepturi laudantium alias maxime, in delectus necessitatibus saepe eum nostrum quam numquam laboriosam fugiat quia veniam fugit nobis nemo earum voluptatem qui. Quaerat, quisquam esse! Consequatur soluta doloribus labore iusto nostrum id reprehenderit. Animi, aliquam voluptates. Doloribus illo temporibus rem quaerat, numquam eligendi consectetur distinctio laborum dolor pariatur, nihil tenetur, eos placeat! Doloremque, dolorem impedit! Quas porro repudiandae perferendis eligendi unde sapiente possimus, deserunt dolore eveniet nostrum dicta dolorem tenetur amet perspiciatis dolor. Perspiciatis voluptate ut unde praesentium harum ipsum aliquam dignissimos? Dolores magnam, est expedita blanditiis fugiat nobis sed debitis.',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
