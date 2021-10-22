import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* Header */}
      {children}
      {/* Footer */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
