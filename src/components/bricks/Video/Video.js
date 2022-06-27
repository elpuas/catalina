import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as styles from './Video.module.css';
/**
 * Render the video block component
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - The props object.
 * @param {string} props.videoSrcURL - The video url (youTube, Vimeo, etc ).
 * @param {string} props.videoTitle - The video title
 * @param {string} props.children - A image to display before the video.
 * @return {Element} - The video block component.
 */
export default function Video(props) {
  const { videoUrl, videoTitle, children } = props;
  const [hideThumbnail, setHideThumbnail] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setHideThumbnail(!hideThumbnail);
  };

  return (
    <div>
      <div className={styles.videoWrapper}>
        <button
          type="button"
          onClick={onClick}
          className={styles.thumbnail}
          style={{ display: hideThumbnail ? 'none' : 'block' }}
        >
          {children}
        </button>
        <iframe
          src={hideThumbnail ? `${videoUrl}?autoplay=1` : undefined}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          style={{ display: hideThumbnail ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
}

Video.propTypes = {
  videoUrl: PropTypes.string,
  videoTitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object,
};

Video.defaultProps = {
  videoUrl: {
    url: 'https://www.youtube.com/embed/Unqsu8aGy8Y',
  },
  videoTitle: '30 Seconds with Reemo at The Berrics Plaza',
  children: React.createElement('img', {
    src: 'https://placekitten.com/800/600',
    alt: 'placeholder',
  }),
};
