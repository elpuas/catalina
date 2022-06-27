/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { StructuredText } from 'react-datocms';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './BlockTextImage.module.css';

/**
 * The BlockTextImage component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - Component props.
 * @param {object} props.content - The content of the block.
 * @param {object} props.image - The image of the block.
 * @return {Element} - The React element.
 */
export default function BlockTextImage(props) {
  const { content, image } = props;

  return (
    <div className={styles.blockTextImage}>
      <StructuredText data={content} />
      <GatsbyImage image={image?.gatsbyImageData} alt={`block-${image?.alt}`} />
    </div>
  );
}

BlockTextImage.defaultProps = {
  content: {},
  image: {},
};

BlockTextImage.propTypes = {
  content: PropTypes.any,
  image: PropTypes.any,
};
