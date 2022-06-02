import React from 'react';
import { StructuredText } from 'react-datocms';
import Heading from '../../bricks/Heading/Heading';
import Button from '../../bricks/Button/Button';
import * as styles from './BlockHeroContent.module.css';

/**
 * The HeroContent component is used to display a hero with a heading, eyenbrow, and a button.
 */
export default function BlockHeroContent(props) {
  const { heading, eyebrow, link } = props;
  return (
    <div className={styles.hero}>
      <div className={styles.eyebrow}>{ eyebrow}</div>
      <Heading className={styles.heading} level="2">
        <StructuredText data={heading} />
      </Heading>
      <Button slug={`/${link.slug}`} name="Learn More" mode="secondary" />
    </div>
  );
}
