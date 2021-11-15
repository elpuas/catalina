const path = require("path");

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
        articles.forEach(({ node: post }) => {
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
            component: path.resolve(
              "./src/components/templates/Article/Article.js"
            ),
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

  const createPages = new Promise((resolve, reject) => {
    try {
      graphql(`
        {
          allDatoCmsPage {
            edges {
              node {
                slug
                id
              }
            }
          }
        }
      `).then((res) => {
        const pages = res.data.allDatoCmsPage.edges;

        pages.forEach(({ node: page }) => {
          const { slug } = page;
          /**
           * Create page for each page.
           * Create slug for template.
           * Pass page data to template.
           * @param {string} slug - Page slug.
           * @returns {void}
           */
          createPage({
            path: `/${slug}`,
            component: path.resolve("./src/components/templates/Page/Page.js"),
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

  return Promise.all([createArticle, createPages]);
};
