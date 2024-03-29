/* eslint-disable react/jsx-props-no-spreading */
import { graphql } from 'gatsby';
import * as React from 'react';
import { PropTypes } from 'prop-types';
import Layout from '../components/bricks/Layout/Layout';
import SEO from '../components/bricks/Seo/Seo';
import * as styles from '../components/templates/Page/Page.module.css';
import Blocks from '../components/blocks/Blocks/Blocks';

export default function IndexPage({ data }) {
  const { content, seoMetaTags } = data.datoCmsFrontPage;

  const seoProps = {
    seoMetaTags,
    pageDescription: { description: seoMetaTags.tags[0].content },
  };

  return (
    <Layout>
      <SEO {...seoProps} />
      <main className={styles.main}>
        <Blocks blocks={content} />
      </main>
    </Layout>
  );
}

export const SeoQuery = graphql`
  query FrontPage {
    datoCmsFrontPage {
      title
      slug
      content {
        ... on DatoCmsBlockHeroContent {
          eyebrow
          heroAlign
          heading {
            value
          }
          model {
            apiKey
          }
          ...Links
        }
        ... on DatoCmsBlockVideoHero {
          model {
            apiKey
          }
          ...CalloutVideo
          videoUrl
          thumbnail {
            gatsbyImageData
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
      }
      seoMetaTags {
        tags
      }
      pageDescription {
        description
      }
    }
  }
`;

IndexPage.defaultProps = {
  data: null,
};

IndexPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any,
};
