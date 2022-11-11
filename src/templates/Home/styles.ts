import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    padding: 15px 22px;
    border-radius: 24px;
    border: none;
    font-weight: 500;
    color: #fff;
    background-color: ${theme.colors.primary};
  `}
`;

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};
    background-color: ${theme.colors.mainBg}

    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

