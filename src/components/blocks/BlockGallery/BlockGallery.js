import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as styles from './BlockGallery.module.css';
import Image from '../../bricks/Image/Image';
import Observables from '../../bricks/Observables/Observables';

export default function BlockGallery(props) {
  const { images, galleryStyle } = props;
  const galleryClass = galleryStyle.replace('_g', 'G') || 'default';

  return (
    <>
      <div className={cx(styles.gallery, styles[galleryClass])}>
        {images.map((image, index) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Observables
            isVisibleClass="isVisible"
            customClass={cx('observable-index', styles.item)}
            threshold={0.5}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <Image image={image} alt={image} />
            <span className={styles.title}>{image.title}</span>
          </Observables>
        ))}
      </div>
    </>
  );
}

BlockGallery.defaultProps = {
  images: [],
  galleryStyle: 'default',
};

BlockGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      // eslint-disable-next-line react/forbid-prop-types
      gatsbyImageData: PropTypes.object,
    }),
  ),
  galleryStyle: PropTypes.string,
};
