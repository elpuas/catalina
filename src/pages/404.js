import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import gifImage from '../images/404-pic.gif';
import Layout from '../components/bricks/Layout/Layout';
import SEO from '../components/bricks/Seo/Seo';
import Heading from '../components/bricks/Heading/Heading';
import * as styles from './404.module.css';

export default function NotFoundPage() {
  const playlists = [
    'https://open.spotify.com/embed/playlist/6WkG1vLY6na3aJTcCEOCCo',
    'https://open.spotify.com/embed/playlist/6kkrSVxKD9wgLhaxFiQd5E',
    'https://open.spotify.com/embed/playlist/60TdnsygGvCVJvuiofOQjV',
  ];

  const [playlist, setPlaylist] = useState(playlists[0]);

  useEffect(() => {
    setInterval(() => {
      const random = Math.floor(Math.random() * playlists.length);
      setPlaylist(playlists[random]);
    }, 10000);
  }, []);

  return (
    <Layout>
      <SEO />
      <Heading className={styles.heading} level="1">
        Page Not Found
      </Heading>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src={gifImage} alt="404" />
          <iframe
            src={playlist}
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="EBM-Industrial Playlist"
          />
        </div>
        <h2>
          You just hit a route that doesn&apos;t exist... the sadness.
          🔊  Enjoy my favorite playlist or
          {' '}
          <Link
            to="/"
            aria-label="Go to home page"
          >
            click here
            {' '}
          </Link>
          to go to the homepage
        </h2>
      </div>
    </Layout>
  );
}
