import { Link, graphql, useStaticQuery } from 'gatsby';
import { useState, useEffect } from 'react';
import * as React from 'react';
import cx from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';
// import PropTypes from 'prop-types';
import * as styles from './Navigation.module.css';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { useAppContext } from '../../context/AppContext';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
/**
 * The Navigation Component
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @return {Element} Renders the Navigation
 */
export default function Navigation() {
  const data = useStaticQuery(graphql`
    query Navigation {
      allDatoCmsNavigation {
        nodes {
          model {
            apiKey
          }
          menu {
            ... on DatoCmsFrontPage {
              id
              slug
              title
              model {
                apiKey
              }
            }
            ... on DatoCmsPage {
              id
              slug
              title
              model {
                apiKey
              }
            }
          }
        }
      }
    }
  `);

  const { menu } = data.allDatoCmsNavigation.nodes[0];
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [isOpen, setOpen] = useState(false);
  const { handleSetIsMenuOpen } = useAppContext();

  useEffect(() => {
    handleSetIsMenuOpen(isOpen);
  }, [isOpen]);

  return (
    <nav className={cx(styles.navigation, isDesktop && styles.isDesktop, isOpen && styles.isOpen)}>
      <Hamburger toggled={isOpen} toggle={setOpen} rounded />
      <div className={cx(
        styles.menu,
        isDesktop ? styles.desktop : styles.mobile,
        isOpen && styles.displayNav,
      )}
      >
        <ul className={styles.list}>
          { menu.map((link) => (
            <li key={link?.id} className={styles.link}>
              <Link to={link.model.apiKey === 'front_page' ? '/' : link.slug}>{`${link.title}.`}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Navigation.propTypes = {
//   menu: PropTypes.arrayOf(PropTypes.object),
// };

// Navigation.defaultProps = {
//   menu: [
//     { slug: '/', name: 'Home' },
//     { slug: '/', name: 'About' },
//   ],
// };
