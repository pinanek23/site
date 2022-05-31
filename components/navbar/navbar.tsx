import * as React from 'react'
import { useTheme } from 'next-themes'
import classnames from 'clsx'
import Logo from '@/components/logo'
import NavItem from '@/components/nav-item'
import ThemeButton from '@/components/theme-button'
import MenuButton from '@/components/menu-button'
import { classes } from '@/styles'
import * as Styles from './navbar.css'

function NavBar(): JSX.Element {
  const [isThemeReady, setThemeReady] = React.useState(false)
  const [isMenuOpened, setMenuOpened] = React.useState(false)

  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    if (!isThemeReady && resolvedTheme !== undefined) setThemeReady(true)
  }, [resolvedTheme, isThemeReady])

  function handleToggleTheme(): void {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  function handleToggleMenu(): void {
    setMenuOpened((previousValue) => !previousValue)
  }

  return (
    <div className={Styles.wrapper}>
      <div className={classnames(Styles.container, classes.pageSizing)}>
        <Logo className={Styles.logo} />
        <div className={classnames(Styles.items, isMenuOpened ? Styles.menuOpen : Styles.menuClose)}>
          <div className={Styles.navItems}>
            <NavItem href="/posts">Posts</NavItem>
            <NavItem href="/categories">Categories</NavItem>
            <NavItem href="/about">About me ❤️</NavItem>
          </div>
          <div>
            {isThemeReady && <ThemeButton isDarkColorMode={resolvedTheme === 'dark'} onClick={handleToggleTheme} />}
          </div>
        </div>
        <MenuButton className={Styles.menuButton} isMenuOpened={isMenuOpened} onClick={handleToggleMenu} />
      </div>
    </div>
  )
}

export default NavBar
