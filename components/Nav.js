import React from 'react'
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.list}>
        <li className={navStyles.item}>
          <a href="#" className={navStyles.link}>Posts</a>
        </li>
        <li className={navStyles.item}>
          <a href="#" className={navStyles.link}>Todos</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
