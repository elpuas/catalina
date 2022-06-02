import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import Author from '../Author/Author';
import * as styles from './Card.module.css';
import Category from '../Category/Category';

/**
 * The Card Brick component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {Object} props               The props object.
 * @param {string} props.title         The title of the card.
 * @param {Object} props.featureImage  The image of the card.
 * @param {string} props.articleAuthor The author of the article.
 * @param {string} props.slug          The slug of the article.
 * @param {array} props.categories     The categories of the article.
 * @returns {Element}                  The Card Brick component.
 */
export default function Card(props) {
  const {
    title, articleAuthor, slug, featuredImage, categories,
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <Heading className={styles.heading} level="3">
          {title}
        </Heading>
        <Author author={articleAuthor} />
      </div>
      <div className={styles.cardImage}>
        <GatsbyImage image={featuredImage.gatsbyImageData} alt="slug" />
        <Category categories={categories} />
      </div>
    </div>
  );
}

Card.defaultProps = {
  title: 'Card Title',
  articleAuthor: 'ElPuas',
  slug: '/',
  featuredImage: {},
  categories: [{ slug: '/', title: 'code' }],
};

Card.propTypes = {
  title: PropTypes.string,
  articleAuthor: PropTypes.string,
  slug: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  featuredImage: PropTypes.object,
  categories: PropTypes.arrayOf(PropTypes.object),
};
