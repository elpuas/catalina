const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  /**
   * Create article pages.
   *
   * @param {Object} result - GraphQL query result.
   * @param {Object} result.data - GraphQL query result data.
   * @returns {void}
   */
  const createArticle = new Promise((resolve, reject) => {
    try {
      graphql(`
      {
        allDatoCmsArticle {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      `).then((res) => {
        const articles = res.data.allDatoCmsArticle.edges;
        // eslint-disable-next-line array-callback-return
        articles.map(({ node: post }) => {
          const { slug } = post;
          /**
           * Create article page.
           * Create page for each article.
           * Create slug for template.
           * Pass article data to template.
           * @param {string} slug - Article slug.
           * @returns {void}
          */
          createPage({
            path: `/blog/${slug}`,
            component: path.resolve('./src/components/templates/Article/Article.js'),
            context: {
              slug,
            },
          });
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });

  return Promise.all([createArticle]);
};
