import { useState } from 'react'
import Link from 'next/link'

import * as S from './styles'

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false)

  const handleClick = () => {
    setOpenMenu(!isOpenMenu)
    console.log('oasdpoaskdp')
  }

  return (
    <S.Nav>
      <S.NavContent>
        <S.Logo>
          <Link style={{ textDecoration: 'none', color: '#262626' }} href="/">
            <b>NextJS</b>
          </Link>
        </S.Logo>
        <S.BurgerButton
          role="button"
          onClick={handleClick}
          menuOpened={isOpenMenu}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </S.BurgerButton>
      </S.NavContent>
    </S.Nav>
  )
}

export default Header
