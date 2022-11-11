import { Container } from 'components/Container'
// import Footer from 'components/Footer'
// import Menu from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Container>
      <p>Menu</p>
    </Container>

    <S.Content>{children}</S.Content>

    <p>Footer</p>
  </S.Wrapper>
)

export default Base
