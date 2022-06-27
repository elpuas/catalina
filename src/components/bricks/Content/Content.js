import * as React from 'react';
import PropTypes from 'prop-types';
import { StructuredText } from 'react-datocms';
import * as styles from './Content.module.css';
/**
 * Content component
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - The prop object.
 * @param {string} props.content - The content string.
 * @return {Element} - The content element.
 */
export default function Content({ content }) {
  return (
    <div className={styles.paragraph}>
      <StructuredText data={content} />
    </div>
  );
}

Content.defaultProps = {
  content: {
    value: {
      schema: 'dast',
      document: {
        type: 'root',
        children: [
          {
            type: 'heading',
            level: 1,
            children: [
              {
                type: 'span',
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
              {
                type: 'span',
                marks: ['strong'],
                value: 'Ut enim ad minim veniam',
              },
            ],
          },
        ],
      },
    },
  },
};

Content.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.shape({ value: PropTypes.object }),
};
