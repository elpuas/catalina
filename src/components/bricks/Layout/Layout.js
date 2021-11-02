import * as React from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from '../../context/AppContext';
import * as styles from './Layout.module.css';
import Header from '../../structures/Header/Header';

export default function Layout({ children }) {
  const { isMenuOpen } = useAppContext();
  return (
    <div className={styles.container}>
      <Header isMenuOpen={isMenuOpen} />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
