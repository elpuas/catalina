/* eslint-disable react/jsx-props-no-spreading */
import { graphql } from 'gatsby';
import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as styles from './Page.module.css';
import Blocks from '../../blocks/Blocks/Blocks';
import Layout from '../../bricks/Layout/Layout';
import SEO from '../../bricks/Seo/Seo';

/**
 * The Page component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - Component props.
 * @param {object} props.data - Component data.
 * @return {Element} - React component.
 */
export default function Page({ data }) {
  const { content, seoMetaTags, slug } = data.datoCmsPage;

  const seoProps = {
    seoMetaTags,
    pageDescription: { description: seoMetaTags.tags[0].content },
  };

  const pageClass = slug.replaceAll('-', '').toLowerCase();

  return (
    <>
      <Layout>
        <SEO {...seoProps} />
        <main className={cx(styles.main, styles[pageClass])}>
          <Blocks blocks={content} />
          {slug === 'lets-talk' && (
            <a className={styles.button} href="mailto:management@elpuasdev.com?subject=Let&apos;s talk&body=Let me know if that’s something that you’d be interested in.">Get in Touch</a>
          )}
        </main>
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
      title
      slug
      seoMetaTags {
        tags
      }
      content {
        ... on DatoCmsBlockGallery {
          model {
            apiKey
          }
          galleryStyle
          images {
            alt
            title
            gatsbyImageData
          }
        }
        ... on DatoCmsBlockTextAndImage {
          model {
            apiKey
          }
          content {
            value
          }
          image {
            gatsbyImageData
            url
            alt
          }
        }
        ... on DatoCmsBlockSelectedArticlesHero {
          model {
            apiKey
          }
          ...CalloutArticle
          articles {
            articleAuthor
            slug
            title
            categories {
              title
              slug
            }
            featuredImage {
              gatsbyImageData
              alt
            }
          }
        }
        ... on DatoCmsBlockParagraph {
          id
          model {
            apiKey
          }
          content {
            value
          }
        }
        ... on DatoCmsBlockVideoHero {
          model {
            apiKey
          }
          callout {
            content {
              value
            }
            heading {
              value
            }
            link {
              ... on DatoCmsArticle {
                slug
                title
              }
              ... on DatoCmsPage {
                slug
                title
              }
            }
          }
          videoUrl
          thumbnail {
            gatsbyImageData
            url
          }
        }
        ... on DatoCmsBlockImage {
          alignment
          model {
            apiKey
          }
          image {
            gatsbyImageData
            alt
          }
        }
      }
    }
  }
`;

Page.defaultProps = {
  data: null,
};

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any,
};
