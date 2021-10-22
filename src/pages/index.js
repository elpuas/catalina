/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { graphql } from 'gatsby';
import Heading from '../components/bricks/Heading/Heading';
import SEO from '../components/bricks/Seo/Seo';
import Layout from '../components/bricks/Layout/Layout';
import Paragraph from '../components/bricks/Paragraph/Paragraph';
import Header from '../components/blocks/Header/Header';
import Author from '../components/bricks/Author/Author';
import Category from '../components/bricks/Category/Category';
import Date from '../components/bricks/Date/Date';
import Button from '../components/bricks/Button/Button';

export default function IndexPage({ data }) {
  const seo = data.datoCmsFrontPage;
  return (
    <Layout>
      <Header />
      <main>
        <SEO {...seo} />
        <Heading level="1">
          Catalina
        </Heading>
        <Paragraph />
        <Author />
        <Category />
        <Date />
        <Button />
        <Button mode="secondary" />
      </main>
    </Layout>
  );
}

export const SeoQuery = graphql`
  query MetaTags {
    datoCmsFrontPage {
      seoMetaTags {
        tags
      }
      pageDescription {
        description
      }
    }
  }
`;
