import * as React from 'react'
import {Spinner, tokens} from '../src'

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(tokens.color),
      },
    },
    size: {
      control: {
        type: 'text',
      },
    },
  },
}

const Template = (props: any = {}) => (
  <span>
    Check out this inline <Spinner {...props} /> spinner
  </span>
)

export const Example = Template.bind({})
// @ts-ignore
Example.args = {}
