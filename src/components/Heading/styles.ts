import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, LineColors } from '.'

const rgbLineColors = {
  primary: '#F231A5',
  secondary: '#3CD3C1'
}

const rgbColor = {
  white: '#FAFAFA',
  black: '#030517'
}

export const wrapperModifiers = {
  small: () => css`
    font-size: 1.6rem;
    &::after {
      width: 3rem;
    }
  `,

  medium: () => css`
    font-size: 2rem;
    ${media.greaterThan('medium')`
      font-size:2.8rem;
  `}
  `,

  huge: () => css`
    font-size: 5.2rem;
  `,

  lineLeft: (lineColor: LineColors) => css`
    padding-left: 0.8rem;
    border-left: 0.7rem solid ${rgbLineColors[lineColor]};
  `,

  lineBottom: (lineColor: LineColors) => css`
    position: relative;
    margin-bottom: 3.2rem;

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${rgbLineColors[lineColor]};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ color, size, lineLeft, lineBottom, lineColor }) => css`
    color: ${rgbColor[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(lineColor!)}
    ${!!size && wrapperModifiers[size]}
  `}
`
