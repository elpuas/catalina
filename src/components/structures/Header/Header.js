import * as React from 'react';
import cx from 'classnames';
import Logo from '../../bricks/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import * as styles from './Header.module.css';

export default function Header({ isMenuOpen }) {
  return (
    <header className={cx(styles.header, isMenuOpen && styles.isOpen)}>
      <Logo />
      {console.log(isMenuOpen)}
      <Navigation />
    </header>
  );
}
