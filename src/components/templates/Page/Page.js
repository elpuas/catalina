/* eslint-disable react/jsx-props-no-spreading */
import { graphql } from "gatsby";
import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./Page.module.css";
import Blocks from "../../blocks/Blocks/Blocks";
import Layout from "../../bricks/Layout/Layout";
import SEO from "../../bricks/Seo/Seo";

/**
 * The Page component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - Component props.
 * @param {object} props.data - Component data.
 * @return {Element} - React component.
 */
export default function Page({ data }) {
  const { content, seoMetaTags } = data.datoCmsPage;

  return (
    <>
      <Layout>
        <SEO {...seoMetaTags} />
        <main className={styles.main}>
          <Blocks blocks={content} />
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
