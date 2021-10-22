import * as React from 'react';
import Logo from '../../bricks/Logo/Logo';
import * as styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      {/* Navigation */}
    </header>
  );
}
