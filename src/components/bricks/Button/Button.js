import * as React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './Button.module.css';
import { ArrowRightICO } from '../Icons/Icons';

/**
 * The button component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {Object} props The props object.
 * @param {string} props.slug As the button link.
 * @param {string} props.name The text link.
 * @param {string} props.style The button style, primary or secondary.
 * @return {Element} Renders the button component.
 */
export default function Button(props) {
  const { slug, name, mode } = props;
  return (
    <div
      className={cx(
        styles.button,
        mode === 'primary' && styles.primary,
        mode === 'secondary' && styles.secondary,
      )}
    >
      <Link to={slug}>{name}</Link>
      {mode === 'secondary' && <ArrowRightICO />}
    </div>
  );
}

Button.propTypes = {
  slug: PropTypes.string,
  name: PropTypes.string,
  mode: PropTypes.string,
};

Button.defaultProps = {
  slug: '/',
  name: 'Call to Action',
  mode: 'primary',
};
