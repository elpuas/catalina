/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { graphql } from 'gatsby';
import Heading from '../components/bricks/Heading/Heading';
import SEO from '../components/bricks/Seo/Seo';

export default function IndexPage({ data }) {
  const o = data.datoCmsFrontPage
  console.log(o)
  return (
    <main>
      <SEO {...o} />
      <Heading level="1">
        Catalina
      </Heading>
    </main>
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
