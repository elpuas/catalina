/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { PropTypes } from 'prop-types';
import Layout from '../components/bricks/Layout/Layout';
import SEO from '../components/bricks/Seo/Seo';
import * as styles from './blog.module.css';

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
      <div className={styles.gridContainer}>
        { categories.map((category) => (
          <div className={styles.gridItem}>
            <Link to={`/category/${category.slug}`} key={category.slug}>
              <div>
                <h1 className={styles.pageTitle}>{ category.title }</h1>
              </div>
            </Link>
          </div>
        )) }
      </div>
    </Layout>
  );
}
