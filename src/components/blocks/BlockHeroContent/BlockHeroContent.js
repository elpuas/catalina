import React from 'react';
import { StructuredText } from 'react-datocms';
import Heading from '../../bricks/Heading/Heading';
import Button from '../../bricks/Button/Button';
import * as styles from './BlockHeroContent.module.css';
import Observables from '../../bricks/Observables/Observables';

/**
 * The HeroContent component is used to display a hero with a heading, eyebrow, and a button.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {Object} props The props object.
 * @param {string} props.title The title of the hero.
 * @param {string} props.eyebrow The eyebrow of the hero.
 * @param {array} props.link The text of the button.
 * @return {Element} The HeroContent component.
 */
export default function BlockHeroContent(props) {
  const { heading, eyebrow, link } = props;
  return (
    <Observables
      isVisibleClass="isVisible"
      customClass="observable-index"
      threshold={0.75}
    >
      <div className={styles.hero}>
        <div className={styles.eyebrow}>{ eyebrow}</div>
        <Heading className={styles.heading} level="2">
          <StructuredText data={heading} />
        </Heading>
        <Button slug={`/${link.slug}`} name="Learn More" mode="secondary" />
      </div>
    </Observables>
  );
}
