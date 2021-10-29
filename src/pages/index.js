/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { graphql } from 'gatsby';
import Heading from '../components/bricks/Heading/Heading';
import SEO from '../components/bricks/Seo/Seo';
import Layout from '../components/bricks/Layout/Layout';
import Header from '../components/structures/Header/Header';
import Author from '../components/bricks/Author/Author';
import Category from '../components/bricks/Category/Category';
import Date from '../components/bricks/Date/Date';
import Button from '../components/bricks/Button/Button';
import BlockContent from '../components/blocks/BlockContent/BlockContent';
import BlockCode from '../components/blocks/BlockCode/BlockCode';

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
        <Author />
        <Category />
        <Date />
        <Button />
        <Button mode="secondary" />
        <BlockContent />
        <BlockCode />
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
