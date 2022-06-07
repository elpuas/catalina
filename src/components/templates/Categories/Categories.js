import React from 'react';
import { graphql } from 'gatsby';
import Card from '../../bricks/Card/Card';
import Heading from '../../bricks/Heading/Heading';
import Layout from '../../bricks/Layout/Layout';
import * as styles from './Categories.module.css';

export default function Categories({ data, pageContext }) {
  const { edges } = data.allDatoCmsArticle;

  return (
    <div className={styles.category}>
      <Layout>
        <Heading level="1">{pageContext.title}</Heading>
        <div className={styles.cards}>
          { Array.isArray(edges) && edges.map(({ node }) => {
            const {
              id, title, slug, featuredImage,
            } = node;
            return (
              <Card key={id} title={title} slug={slug} image={featuredImage} categories={false} />
            );
          })}
        </div>
      </Layout>
    </div>
  );
}

export const articleQuery = graphql`
  query CategoryQuery( $slug: String! ) {
    allDatoCmsArticle( filter: {categories: {elemMatch: {slug: {eq: $slug }}}} ) {
    edges {
      node {
        id
        title
        slug
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
  }
`;
