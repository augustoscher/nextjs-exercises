import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    html {
      font-size: 90%;
    }

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
`

export default GlobalStyles
