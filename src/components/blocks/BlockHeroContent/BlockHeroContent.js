import React from 'react';
import PropTypes from 'prop-types';
import { StructuredText } from 'react-datocms';
import cx from 'classnames';
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
 * @param {string} props.heroAlign The alignment of the hero.
 * @return {Element} The HeroContent component.
 */
export default function BlockHeroContent(props) {
  const {
    heading, eyebrow, link, heroAlign,
  } = props;
  return (
    <Observables
      isVisibleClass="isVisible"
      customClass="observable-index"
      threshold={0.5}
    >
      <div className={cx(styles.hero, styles[heroAlign])}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <Heading className={styles.heading} level="2">
          <StructuredText data={heading} />
        </Heading>
        <Button slug={`/${link.slug}`} name="Learn More" mode="primary" />
      </div>
    </Observables>
  );
}

BlockHeroContent.defaultProps = {
  heading: {},
  eyebrow: '',
  link: {},
  heroAlign: 'alignLeft',
};

BlockHeroContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  heading: PropTypes.object,
  eyebrow: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  link: PropTypes.object,
  heroAlign: PropTypes.string,
};
