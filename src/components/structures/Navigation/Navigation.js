import { Link, graphql, useStaticQuery } from 'gatsby';
import { Squash as Hamburger } from 'hamburger-react';
import { useState, useEffect } from 'react';
import * as React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './Navigation.module.css';
import { useAppContext } from '../../context/AppContext';
import useMediaQuery from '../../../hooks/useMediaQuery';

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
    <nav
      className={cx(
        styles.navigation,
        isDesktop && styles.isDesktop,
        isOpen && styles.isOpen,
      )}
    >
      <Hamburger toggled={isOpen} toggle={setOpen} rounded />
      <div
        className={cx(
          styles.menu,
          isDesktop ? styles.desktop : styles.mobile,
          isOpen && styles.displayNav,
        )}
      >
        <ul className={styles.list}>
          {menu.map((link) => (
            <li key={link?.id} className={styles.link}>
              <Link
                to={link.model.apiKey === 'front_page' ? '/' : `/${link.slug}`}
                aria-label={`Go to ${link.title}`}
              >
                {`${link.title}.`}
              </Link>
            </li>
          ))}
          <li className={styles.link}>
            <Link to="/blog" aria-label="Go to Blog">
              Blog.
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
      model: PropTypes.shape({
        apiKey: PropTypes.string,
      }),
    }),
  ),
};

Navigation.defaultProps = {
  menu: [
    { slug: '/', name: 'Home' },
    { slug: '/', name: 'About' },
  ],
};
