import React from 'react';
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';
import * as styles from './ShareButtons.module.css';



export default function ShareButtons() {
  return (
    <div className={styles.wrapper}>
      <p>Share this article</p>
      <ul className={styles.container}>
        <li>
          <LinkedinShareButton url={typeof window !== 'undefined' && window.location.href}>
            <LinkedinIcon size={32} iconFillColor="#D8FF00" round />
          </LinkedinShareButton>
        </li>
        <li>
          <TwitterShareButton url={typeof window !== 'undefined' && window.location.href}>
            <TwitterIcon size={32} iconFillColor="#D8FF00" round />
          </TwitterShareButton>
        </li>
        <li>
          <RedditShareButton url={typeof window !== 'undefined' && window.location.href}>
            <RedditIcon size={32} iconFillColor="#D8FF00" round />
          </RedditShareButton>
        </li>
      </ul>
    </div>
  );
}
