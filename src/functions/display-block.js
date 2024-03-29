/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import BlockCode from '../components/blocks/BlockCode/BlockCode';
import BlockContent from '../components/blocks/BlockContent/BlockContent';
import BlockTextImage from '../components/blocks/BlockTextImage/BlockTextImage';
import BlockVideo from '../components/blocks/BlockVideo/BlockVideo';
import BlockHeroContent from '../components/blocks/BlockHeroContent/BlockHeroContent';
import BlockSelectedArticlesHero from '../components/blocks/BlockSelectedArticlesHero/BlockSelectedArticlesHero';
import BlockImage from '../components/blocks/BlockImage/BlockImage';
import BlockGallery from '../components/blocks/BlockGallery/BlockGallery';
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

    case 'block_gallery':
      return <BlockGallery {...block} key={index} />;

    case 'block_hero_content':
      return <BlockHeroContent {...block} key={index} />;

    case 'block_image':
      return <BlockImage {...block} key={index} />;

    case 'block_paragraph':
      return <BlockContent {...block} key={index} />;

    case 'block_selected_articles_hero':
      return <BlockSelectedArticlesHero {...block} key={index} />;

    case 'block_text_and_image':
      return <BlockTextImage {...block} key={index} />;

    case 'block_video_hero':
      return <BlockVideo {...block} key={index} />;

    default:
      return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>;
  }
}
