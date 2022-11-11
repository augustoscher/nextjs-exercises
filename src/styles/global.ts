import {
  createGlobalStyle,
  css,
} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  font-family: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // antialising: ajusta fontes para macos com retina. Nao temos problema de serrilhar a fonte
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.lightBg}
    }
  `}
`

export default GlobalStyles
