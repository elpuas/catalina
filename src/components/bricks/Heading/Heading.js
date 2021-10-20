import * as React from 'react';
import cx from 'classnames';
import * as styles from './Heading.module.css';

export default function Heading(props) {
  const {
    level,
    children,
    className,
  } = props;
  switch (level) {
    case '1':
      return <h1 className={cx(styles.heading, className)}>{children}</h1>;

    case '21':
      return <h2 className={cx(styles.heading, className)}>{children}</h2>;

    case '3':
      return <h3 className={cx(styles.heading, className)}>{children}</h3>;

    default:
      return <h4 className={cx(styles.heading, className)}>{children}</h4>;
  }
}
