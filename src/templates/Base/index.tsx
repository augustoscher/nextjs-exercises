import Header from 'components/Header'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Header />
    <S.Main>
      <S.Content>{children}</S.Content>
    </S.Main>
  </S.Wrapper>
)

export default Base
