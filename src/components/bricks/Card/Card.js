import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Heading from '../Heading/Heading';
import Author from '../Author/Author';
import * as styles from './Card.module.css';
import Category from '../Category/Category';

export default function Card(props) {
  const {
    title, author, featuredImage, categories,
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <Heading className={styles.heading} level="2">
          {title}
        </Heading>
        <Author author={author} />
      </div>
      <div className={styles.cardImage}>
        <GatsbyImage image={featuredImage.gatsbyImageData} alt="slug" />
        <Category categories={categories} />
      </div>
    </div>
  );
}
