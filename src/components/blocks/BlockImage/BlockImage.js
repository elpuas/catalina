import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Image from '../../bricks/Image/Image';
import * as styles from './BlockImage.module.css';

export default function BlockImage(props) {
  const { image, alignment } = props;
  return (
    <div className={cx(styles.blockImage, styles[alignment])}>
      <Image image={image} alt={image} />
    </div>
  );
}

BlockImage.defaultProps = {
  image: null,
  alignment: 'left',
};

BlockImage.propTypes = {
  image: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ),
  alignment: PropTypes.string,
};
