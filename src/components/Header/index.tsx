import Link from 'next/link'
import styles from './Header.module.css'

// type BurgerButtonProps = {
//   menuOpened: boolean
// }

// const modifiers = {
//   collapsed: () => css``,
//   normal: () => css``
// }

// export const BurgerButton = styled.div<BurgerButtonProps>`
//   ${({ menuOpened }) => css`
//     justify-content: flex-end;
//     height: 16px;
//     width: 24px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     cursor: pointer;
//     & span {
//       display: block;
//       height: 2.4px;
//       width: 100%;
//       border-radius: 10px;
//       background: #262626;
//     }
//     ${menuOpened ? modifiers.normal : modifiers.collapsed}
//   `}
// `

const Header = () => {
  // const [isOpenMenu, setOpenMenu] = useState(false)

  // const handleClick = () => {
  //   setOpenMenu(!isOpenMenu)
  //   console.log('oasdpoaskdp')
  // }

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <Link style={{ textDecoration: 'none', color: '#262626' }} href="/">
            <b>NextJS</b>
          </Link>
        </div>
        {/* <S.BurgerButton
          role="button"
          onClick={handleClick}
          menuOpened={isOpenMenu}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </S.BurgerButton> */}
      </div>
    </nav>
  )
}

export default Header
