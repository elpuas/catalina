import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './BlockCode.module.css';
/**
 * The code block component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - Component props.
 * @param {string} props.code - Code to be highlighted.
 * @param {string} props.language - Language of the code.
 * @return {Element} - Returns the JSX element.
 */
export default function BlockCode(props) {
  const {
    code: {
      value: { document },
    },
  } = props;

  const language = document?.children[0]?.language;
  const code = document?.children[0]?.code;

  return (
    <div className={styles.blockCode}>
      <div />
      <SyntaxHighlighter language={language} style={dracula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

BlockCode.propTypes = {
  code: PropTypes.shape({
    value: PropTypes.shape({
      document: PropTypes.shape({
        children: PropTypes.arrayOf(
          PropTypes.shape({
            language: PropTypes.string,
            code: PropTypes.string,
          }),
        ),
      }),
    }),
  }),
};

BlockCode.defaultProps = {
  code: {
    value: {
      document: {
        children: [
          {
            language: 'javascript',
            code: '() => { console.log("Hello World")}',
          },
        ],
      },
    },
  },
};
