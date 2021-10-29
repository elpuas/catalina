/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../bricks/Layout/Layout';
import SEO from '../../bricks/Seo/Seo';
import Header from '../../structures/Header/Header';
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
    title,
    content,
    categories,
    seoMetaTags,
    featuredImage,
    description,
    meta,
  } = data.datoCmsArticle;

  const seo = {
    seoMetaTags,
    description,
  };

  return (
    <Layout>
      <SEO {...seo} />
      <Header />
      <div className="article">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Layout>
  );
}

/** The Article Query */
export const articleQuery = graphql`
  query ArticleQuery($slug: String!) {
    datoCmsArticle( slug: { eq: $slug } ) {
      title
      slug
      meta {
        publishedAt(fromNow: false)
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
