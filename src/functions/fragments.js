import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const calloutVideo = graphql`
  fragment CalloutVideo on DatoCmsBlockVideoHero {
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
  }
`;

export const calloutArticles = graphql`
  fragment CalloutArticle on DatoCmsBlockSelectedArticlesHero {
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
  }
`;

export const link = graphql`
  fragment Links on DatoCmsBlockHeroContent {
    link {
      ... on DatoCmsArticle {
        id
        slug
        title
      }
      ... on DatoCmsPage {
        id
        slug
        title
      }
    }
  }
`;
