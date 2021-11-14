import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as styles from './Footer.module.css';
import { TwitterICO, GithubICO, WordPressICO } from '../../bricks/Icons/Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <StaticQuery
      query={graphql`
      query FooterQuery {
          datoCmsFooter {
            copyright
            socialMedia {
              link
            }
          }
        }
      `}
      render={(data) => (
        <footer className={styles.footer}>
          <p>{`© ${year} ${data?.datoCmsFooter?.copyright}`}</p>
          <ul>
            <li className={styles.icons}><a href={data?.datoCmsFooter?.socialMedia[0].link} aria-label="Link to WordPress"><GithubICO /></a></li>
            <li className={styles.icons}><a href={data?.datoCmsFooter?.socialMedia[1].link} aria-label="Link to GitHub"><WordPressICO /></a></li>
            <li className={styles.icons}><a href={data?.datoCmsFooter?.socialMedia[2].link} aria-label="Link to Twitter"><TwitterICO /></a></li>
          </ul>
        </footer>
      )}
    />
  );
}

Footer.propTypes = {
  data: PropTypes.shape({
    datoCmsFooter: PropTypes.shape({
      copyright: PropTypes.string,
      socialMedia: PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
};
