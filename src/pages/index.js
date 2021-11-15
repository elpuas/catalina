/* eslint-disable react/jsx-props-no-spreading */
import { graphql } from "gatsby";
import * as React from "react";
import Author from "../components/bricks/Author/Author";
import BlockCode from "../components/blocks/BlockCode/BlockCode";
import BlockContent from "../components/blocks/BlockContent/BlockContent";
import Button from "../components/bricks/Button/Button";
import Category from "../components/bricks/Category/Category";
import DateMeta from "../components/bricks/DateMeta/DateMeta";
import Heading from "../components/bricks/Heading/Heading";
import Layout from "../components/bricks/Layout/Layout";
import SEO from "../components/bricks/Seo/Seo";
import Observables from "../components/bricks/Observables/Observables";

export default function IndexPage({ data }) {
  const seo = data.datoCmsFrontPage;
  return (
    <Layout>
      <main>
        <SEO {...seo} />
        <Heading level="1">Catalina</Heading>
        <Author />
        <Category />
        <DateMeta />
        <Button />
        <Button mode="secondary" />
        <BlockContent />
        <BlockCode />
        <Observables
          isVisibleClass="isVisible"
          customClass="observable-index"
          threshold={0.75}
        >
          <BlockContent />
        </Observables>
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
