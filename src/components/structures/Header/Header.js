import { PropTypes } from 'prop-types';
import * as React from 'react';
import cx from 'classnames';
import * as styles from './Header.module.css';
import Logo from '../../bricks/Logo/Logo';
import Navigation from '../Navigation/Navigation';

export default function Header({ isMenuOpen }) {
  return (
    <header className={cx(styles.header, isMenuOpen && styles.isOpen)}>
      <Logo />
      <Navigation />
    </header>
  );
}

Header.defaultProps = {
  isMenuOpen: false,
};

Header.propTypes = {
  isMenuOpen: PropTypes.bool,
};
