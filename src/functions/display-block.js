/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import BlockCode from '../components/blocks/BlockCode/BlockCode';
import BlockContent from '../components/blocks/BlockContent/BlockContent';
import BlockTextImage from '../components/blocks/BlockTextImage/BlockTextImage';

/**
 * Decide which block component to display.
 *
 * @param  {object} block - The block data.
 * @param  {number} - index A unique key required by React.
 * @return {Element} - The block component.
 */
export default function displayBlock(block, index) {
  const { model } = block;

  switch (model?.apiKey) {
    case 'block_code':
      return <BlockCode {...block} key={index} />;

    case 'block_paragraph':
      return <BlockContent {...block} key={index} />;

    case 'block_text_and_image':
      return <BlockTextImage {...block} key={index} />;

    default:
      return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>;
  }
}
