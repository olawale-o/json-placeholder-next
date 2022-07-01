import React from 'react';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.list}>
        <li className={navStyles.item}>
          <Link href="/posts">
            <a className={navStyles.link}>Posts</a>
          </Link>
        </li>
        <li className={navStyles.item}>
          <Link href="/todos">
            <a className={navStyles.link}>Todos</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
