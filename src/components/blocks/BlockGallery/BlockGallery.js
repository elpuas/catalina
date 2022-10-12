import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as styles from './BlockGallery.module.css';
import Image from '../../bricks/Image/Image';
import Observables from '../../bricks/Observables/Observables';

export default function BlockGallery(props) {
  const { images } = props;
  return (
    <>
      <div className={styles.gallery}>
        {images.map((image) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Observables
            isVisibleClass="isVisible"
            customClass={cx('observable-index', styles.item)}
            threshold={0.5}
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
};

BlockGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      gatsbyImageData: PropTypes.object,
    }),
  ),
};
