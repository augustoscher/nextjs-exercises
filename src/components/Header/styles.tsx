import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
`

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 60px;
  box-sizing: border-box;
`

export const Logo = styled.div`
  justify-content: flex-start;
  text-decoration: 'none';
`

type BurgerButtonProps = {
  menuOpened: boolean
}

const modifiers = {
  collapsed: () => css``,
  normal: () => css``
}

export const BurgerButton = styled.div<BurgerButtonProps>`
  ${({ menuOpened }) => css`
    justify-content: flex-end;
    height: 20px;
    width: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    & span {
      display: block;
      height: 3px;
      width: 100%;
      border-radius: 10px;
      background: #262626;
    }

    ${menuOpened ? modifiers.normal : modifiers.collapsed}
  `}
`
