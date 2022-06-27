/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import { StructuredText } from 'react-datocms';
import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Callout.module.css';
import BlockContent from '../BlockContent/BlockContent';
import Button from '../../bricks/Button/Button';
import Heading from '../../bricks/Heading/Heading';

/**
 * The Callout component is used to display a callout with a heading, text, and a button.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - Component props.
 * @param {object} props.heading - The heading of the callout.
 * @param {object} props.content - The text of the callout.
 * @param {object} props.link - The button of the callout.
 * @param {string} props.link.slug - The link url of the button.
 * @return {Element} The rendered component.
 */
export default function Callout(props) {
  const { heading, content, link } = props;
  return (
    <div className={styles.callout}>
      <Heading className={styles.heading} level="2">
        <StructuredText data={heading} />
      </Heading>
      <BlockContent content={content} />
      <Button slug={`/${link.slug}`} name="Learn More" mode="secondary" />
    </div>
  );
}

Callout.propTypes = {
  heading: PropTypes.object,
  content: PropTypes.object,
  link: PropTypes.shape({
    slug: PropTypes.string,
  }),
};
