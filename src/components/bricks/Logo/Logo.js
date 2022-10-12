import * as React from 'react';
import { Link } from 'gatsby';
import { SkullICO } from '../Icons/Icons';
import * as styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/" aria-label="go to home">
        <SkullICO />
      </Link>
    </div>
  );
}
