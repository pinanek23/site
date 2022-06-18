import * as React from 'react'
import { useTheme } from 'next-themes'
import classnames from 'clsx'
import NextLink from 'next/link'
import { classes } from '@/styles'
import Logo from '@/components/logo'
import ThemeButton from './theme-button'
import MenuButton from './menu-button'
import NavItem from './nav-item'
import * as Styles from './nav-bar.css'

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
        <NextLink href="/" passHref={true}>
          <a aria-label="Go to Home">
            <Logo className={Styles.logo} />
          </a>
        </NextLink>
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
