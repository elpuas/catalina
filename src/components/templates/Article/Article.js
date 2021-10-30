/* eslint-disable react/jsx-props-no-spreading */
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import * as React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './Article.module.css';
import Author from '../../bricks/Author/Author';
import Blocks from '../../blocks/Blocks/Blocks';
import Category from '../../bricks/Category/Category';
import DateMeta from '../../bricks/DateMeta/DateMeta';
import Header from '../../structures/Header/Header';
import Heading from '../../bricks/Heading/Heading';
import HeroContainer from '../../bricks/HeroContainer/HeroContainer';
import Layout from '../../bricks/Layout/Layout';
import SEO from '../../bricks/Seo/Seo';

/**
 * The Article component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - Component props
 * @param {object} props.data - Component data
 * @return {Element} - React component
 */
export default function Article({ data }) {
  const {
    categories,
    content,
    description,
    featuredImage,
    meta,
    seoMetaTags,
    slug,
    title,
  } = data.datoCmsArticle;

  const seo = {
    seoMetaTags,
    description,
  };

  const date = new Date(meta.publishedAt);
  const createdOn = date.toLocaleDateString('en-US');

  return (
    <>
      <Layout>
        <SEO {...seo} />
        <Header />
        <HeroContainer>
          <GatsbyImage image={featuredImage?.gatsbyImageData} alt={featuredImage?.alt} />
          <div className={styles.heroInner}>
            <Category categories={categories} />
            <Heading level="1">{title}</Heading>
            <div className={styles.meta}>
              <ul>
                <li><Author /></li>
                <li><DateMeta date={createdOn} /></li>
              </ul>
            </div>
          </div>
        </HeroContainer>
        <main className={cx(styles.article, `article-${slug}`)}>
          <Blocks blocks={content} />
        </main>
      </Layout>
    </>
  );
}

Article.defaultProps = {
  data: null,
};

Article.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any,
};

/** The Article Query */
export const articleQuery = graphql`
  query ArticleQuery($slug: String!) {
    datoCmsArticle( slug: { eq: $slug } ) {
      title
      slug
      categories {
        title
        slug
      }
      meta {
        publishedAt(fromNow: false)
      }
      featuredImage {
        gatsbyImageData
        alt
      }
      description {
        title
        description
        twitterCard
        image {
          url
        }
      }
      seoMetaTags {
        tags
      }
      content {
        ... on DatoCmsBlockParagraph {
          model {
            apiKey
          }
          content {
            value
          }
        }
        ... on DatoCmsBlockImage {
          model {
            apiKey
          }
        }
        ... on DatoCmsBlockSelectedArticlesHero {
          model {
            apiKey
          }
        }
        ... on DatoCmsBlockContentWithImage {
          model {
            apiKey
          }
        }
        ... on DatoCmsBlockCode {
          model {
            apiKey
          }
          code {
            value
          }
        }
      }
    }
  }
`;
