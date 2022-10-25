/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/bricks/Layout/Layout';
import SEO from '../components/bricks/Seo/Seo';
import * as styles from './blog.module.css';
import Heading from '../components/bricks/Heading/Heading';

const seo = {
  title: 'Blog',
  description: 'Are you using WordPress with React or GatsbyJS? Well, in this blog, I wrote about code, javascript, events, and a lot of cools stuffs.',
  image: '',
  url: '',
};

export default function Blog() {
  const data = useStaticQuery(graphql`
    query Blog {
      allDatoCmsCategory {
        nodes {
          categoryImage {
            gatsbyImageData
            alt
          }
          title
          slug
        }
      }
    }
  `);

  const categories = data.allDatoCmsCategory.nodes;
  return (
    <Layout>
      <SEO {...seo} />
      <Heading className={styles.heading} level="1">
        Categories
      </Heading>
      <div className={styles.gridContainer}>
        { categories.map((category) => (
          <div className={styles.gridItem}>
            <Link to={`/category/${category.slug}`} key={category.slug}>
              <div className={styles.item}>
                <GatsbyImage
                  image={category.categoryImage.gatsbyImageData}
                  alt={category.categoryImage?.alt}
                />
                <h1 className={styles.pageTitle}>{ category.title }</h1>
              </div>
            </Link>
          </div>
        )) }
      </div>
    </Layout>
  );
}
