import { Link } from 'gatsby';
import { useState } from 'react';
import * as React from 'react';
import cx from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';
import * as styles from './Navigation.module.css';
import useMediaQuery from '../../../hooks/useMediaQuery';
/**
 * The Navigation Component
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {Array} menu The menu items array
 * @return {Element} Renders the Navigation
 */
export default function Navigation({ menu }) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={cx(styles.navigation, isDesktop && styles.isDesktop)}>
      <Hamburger toggled={isOpen} toggle={setOpen} rounded />
      <div className={cx(
        styles.menu,
        isDesktop ? styles.desktop : styles.mobile,
        isOpen && styles.displayNav,
      )}
      >
        <ul className={styles.list}>
          { menu.map((link, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className={styles.link}><Link to={link.slug}>{`${link.name}.`}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
};

Navigation.defaultProps = {
  menu: [
    { slug: '/', name: 'Home' },
    { slug: '/', name: 'About' },
  ],
};
