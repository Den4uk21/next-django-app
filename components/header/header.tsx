import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './header.module.sass'

export const Header = () => {
  const { pathname } = useRouter()
  
  const isSelected = (path: string): string => pathname === path ? ' selected' : ''

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.main_link}><h1>Next App</h1></a>
      </Link>

      <nav className={styles.nav_links}>
        <Link href="/login">
          <a className={styles.link + isSelected('/login')}>Sign In</a>
        </Link>
        <Link href="/register">
          <a className={styles.link + isSelected('/register')}>Sign Up</a>
        </Link>
      </nav>
    </header>
  )
}