import { graphql } from 'gatsby';

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
          categories {
            id
          }
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
          categories {
            id
          }
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
        categories {
          id
        }
      }
      ... on DatoCmsPage {
        id
        slug
        title
      }
    }
  }
`;
