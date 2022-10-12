/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import * as styles from './Category.module.css';

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
      {Array.isArray(categories)
        && categories.map((cat, index) => (
          <li key={index}>
            <Link to={`/category/${cat.slug}`} aria-label={`Go to ${cat.title} Category`}>{cat.title}</Link>
          </li>
        ))}
    </ul>
  );
}

Category.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

Category.defaultProps = {
  categories: [{ slug: '/', title: 'code' }],
};
