import { colors } from '@bfay/tokens'
import { ComponentProps } from 'react'
import { styled } from './styles'
console.log(colors)

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$sm',
  padding: '$4',
  '&:hover': {
    backgroundColor: '$ignite300',
  },
  color: '$white',
  border: 'none',
  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

/* forma para pegar a tipagem dos atributos do component */
export type ButtonProps = ComponentProps<typeof Button>
