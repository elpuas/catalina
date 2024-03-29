/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
/**
 * The SEO Component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props                 The props object.
 * @param {object} props.seoMetaTags     The meta tags.
 * @param {object} props.pageDescription The Description meta.
 * @return {Element}                     The Seo Component
 */
export default function SEO(props) {
  const {
    seoMetaTags: { tags },
    pageDescription: { description },
  } = props;

  const title = tags.filter((tag) => tag.tagName === 'title');

  return (
    <Helmet title={title[0]?.content} htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={description} />
      {tags.map((tag, index) => {
        if (tag.tagName === 'meta') {
          return (
            <meta
              key={index}
              property={tag?.attributes?.property}
              content={tag?.attributes?.content}
            />
          );
        }
        return null;
      })}
      {tags.map((tag, index) => {
        if (tag.tagName === 'meta') {
          return (
            <meta
              key={index}
              name={tag?.attributes?.name}
              content={tag?.attributes?.content}
            />
          );
        }
        return null;
      })}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-86116984-1" />
      <script>
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-86116984-1');`
        }
      </script>
    </Helmet>
  );
}

SEO.propTypes = {
  seoMetaTags: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    tags: PropTypes.arrayOf(PropTypes.object),
  }),
  pageDescription: PropTypes.shape({ description: PropTypes.string }),
};

SEO.defaultProps = {
  seoMetaTags: {
    tags: [
      {
        tagName: 'title',
        content: 'Web Artisan, Developer and Open Source Enthusiast',
      },
    ],
  },
  pageDescription: {
    description:
      'I am a Web Artisan based in beautiful Costa Rica. I run a small workshop of Digital Crafts, I do custom WordPress Development & The JAMStack with GatsbyJS.',
  },
};
