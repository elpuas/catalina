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
import Heading from '../../bricks/Heading/Heading';
import HeroContainer from '../../bricks/HeroContainer/HeroContainer';
import Layout from '../../bricks/Layout/Layout';
import SEO from '../../bricks/Seo/Seo';

/**
 * The Article component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - The component props
 * @param {object} props.data - The component data
 * @return {Element} - The React component
 */
export default function Article({ data }) {
  const {
    categories,
    content,
    featuredImage,
    articleDisplayDate,
    seoMetaTags,
    slug,
    title,
  } = data.datoCmsArticle;

  const date = new Date(articleDisplayDate);
  const createdOn = date.toLocaleDateString('en-US');

  const seoProps = {
    seoMetaTags,
    pageDescription: { description: seoMetaTags.tags[0].content },
  };

  return (
    <div className={styles.article}>
      <Layout>
        <SEO {...seoProps} />
        <HeroContainer>
          <GatsbyImage
            image={featuredImage?.gatsbyImageData}
            alt={featuredImage?.alt}
          />
          <div className={styles.heroInner}>
            <Category categories={categories} />
            <Heading level="1">{title}</Heading>
            <div className={styles.meta}>
              <ul>
                <li>
                  <Author />
                </li>
                <li>
                  <DateMeta date={createdOn} />
                </li>
              </ul>
            </div>
          </div>
        </HeroContainer>
        <main className={cx(styles.siteContent, `article-${slug}`)}>
          <Blocks blocks={content} />
        </main>
      </Layout>
    </div>
  );
}

Article.defaultProps = {
  data: null,
};

Article.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.objectOf(PropTypes.any),
};

/** The Article Query */
export const articleQuery = graphql`
  query ArticleQuery($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      title
      slug
      categories {
        title
        slug
      }
      articleDisplayDate(fromNow: false)
      featuredImage {
        gatsbyImageData
        alt
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
