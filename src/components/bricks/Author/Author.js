import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Author.module.css';
import { SkullICO } from '../Icons/Icons';
/**
 * The author component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {Object} props the props object
 * @param {string} props.author The author string
 * @return {Element} Render the author component.
 */
export default function Author({ author }) {
  return (
    <div className={styles.author}>
      <SkullICO />
      <p>{author}</p>
    </div>
  );
}

Author.propTypes = {
  author: PropTypes.string,
};

Author.defaultProps = {
  author: 'ElPuas',
};
