import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './BlockContent.module.css';
import Content from '../../bricks/Content/Content';
/**
 * BlockContent component
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - Component props.
 * @param {object} props.content - Content to render.
 * @return {Element} - Returns the JSX element.
 */
export default function BlockContent(props) {
  const { content } = props;
  return (
    <div className={styles.blockContent}>
      <Content content={content} />
    </div>
  );
}

BlockContent.defaultProps = {
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
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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

BlockContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.shape({ value: PropTypes.object }),
};
