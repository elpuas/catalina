/* eslint-disable react/require-default-props */
import * as React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './Heading.module.css';
/**
 * Renders the Heading component
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object}  props           The props object.
 * @param {string}  props.level     The heading level.
 * @param {Element} props.children  The heading content.
 * @param {string}  props.className The heading class.
* @return {Element}                 The React component.
 */
export default function Heading(props) {
  const {
    level,
    children,
    className,
  } = props;
  switch (level) {
    case '1':
      return <h1 className={cx(styles.heading, className)}>{children}</h1>;

    case '2':
      return <h2 className={cx(styles.heading, className)}>{children}</h2>;

    case '3':
      return <h3 className={cx(styles.heading, className)}>{children}</h3>;

    default:
      return <h4 className={cx(styles.heading, className)}>{children}</h4>;
  }
}

Heading.propTypes = {
  level: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  className: PropTypes.string,
};
