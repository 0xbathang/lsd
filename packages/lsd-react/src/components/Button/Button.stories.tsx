import { Meta, Story } from '@storybook/react'
import { useStorybookIconComponent } from '../../utils/storybook.utils'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
      defaultValue: 'large',
    },
    icon: {
      type: {
        name: 'enum',
        value: useStorybookIconComponent.options,
      },
    },
  },
} as Meta

export const Root: Story<ButtonProps & { icon: string }> = ({
  icon,
  ...args
}) => {
  const IconComponent = useStorybookIconComponent(icon)
  return (
    <Button
      {...args}
      icon={IconComponent && <IconComponent color="primary"></IconComponent>}
    >
      Button
    </Button>
  )
}

Root.args = {
  disabled: false,
}
