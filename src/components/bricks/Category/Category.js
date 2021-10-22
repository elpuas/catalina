/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import * as styles from './Category.module.css'

/**
 * The category component
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {Object} props           The props object
 * @param {array} props.categories The array of objects with the category info.
 * @return {Element}                Render the category component.
 */
export default function Category({ categories }) {
  return (
    <ul className={styles.categories}>
      { categories.map((cat, index) => <li key={index}><Link to={cat.slug}>{cat.name}</Link></li>) }
    </ul>
  );
}

Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

Category.defaultProps = {
  categories: [{ slug: '/', name: 'code' }],
};
