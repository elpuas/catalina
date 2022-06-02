import React from 'react';
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
