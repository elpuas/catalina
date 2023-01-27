import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Card from '../../bricks/Card/Card';
import Heading from '../../bricks/Heading/Heading';
import Layout from '../../bricks/Layout/Layout';
import * as styles from './Categories.module.css';

/**
 *  The Categories component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - The component props
 * @param {object} props.data - The component data
 * @param {object} props.data.allDatoCmsCategory - The component data
 * @param {object} props.data.allDatoCmsCategory.edges - The component data
 * @param {object} props.pageContext - The component context
 * @return {Element} - The React component
 */
export default function Categories({ data, pageContext }) {
  const { edges } = data.allDatoCmsArticle;

  return (
    <div className={styles.category}>
      <Layout>
        <Heading level="1">{pageContext.title}</Heading>
        <div className={styles.cards}>
          {Array.isArray(edges)
            && edges.map(({ node }) => {
              const {
                id, title, slug, featuredImage,
              } = node;
              return (
                <Card
                  key={id}
                  title={title}
                  slug={slug}
                  image={featuredImage}
                  categories={false}
                />
              );
            })}
        </div>
      </Layout>
    </div>
  );
}

export const articleQuery = graphql`
  query CategoryQuery($slug: String!) {
    allDatoCmsArticle(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } },
      sort: {articleDisplayDate: DESC}
    ) {
      edges {
        node {
          articleDisplayDate(fromNow: false)
          id
          title
          slug
          featuredImage {
            gatsbyImageData
            alt
          }
        }
      }
    }
  }
`;

Categories.defaultProps = {
  data: null,
  pageContext: null,
};

Categories.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.objectOf(PropTypes.any),
  // eslint-disable-next-line react/forbid-prop-types
  pageContext: PropTypes.objectOf(PropTypes.any),
};
