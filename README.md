# Catalina - A Gatsby Blog with DatoCMS

## 🚀 Quick start

1. **Clone the Repo.**

    Use the terminal to clone the repo.

    ```shell
    # clone the repo
    https://github.com/elpuas/catalina.git
    ```

2. **Start developing.**

    Navigate into your new site’s directory install packages and start it up.

    ```shell
    cd catalina
    npm install && gatsby develop
    ```

## Commands

    ```shell
    gatsby develop // Once you’ve installed a Gatsby site, go to the root directory of your project and start the development server.
    gatsby build // At the root of a Gatsby site, compile your application and make it ready for deployment.
    gatsby serve // At the root of a Gatsby site, serve the production build of your site for testing.
    gatsby clean // At the root of a Gatsby site, wipe out the cache (.cache folder) and public directories
    npm run format // Run Prettier and format your code.
    npm run viewer // View your Tailwind config file.
    ```

3. **Open the code and start customizing!**

    Your site is now running at <http://localhost:8000>!

    Edit `src/pages/index.js` to see your site update in real-time!

4. **Theme Structure**

```shell
├── src
    └── components
      ├── bricks
      ├── blocks
      ├── templates
      └── structures
    ├── fonts
    ├── functions
    ├── hooks
    ├── images
    ├── pages
    └── styles
```

5. **DatoCMS**
    To Connect your dato API, is very simple, just create a env file `.env.example`

```shell
DATO_API_TOKEN=YOUR_API_KEY
```

6. **Create Pages**
    To create pages dynamically based on your models, you will need to update `gatsby-node.js` with your model, as an example:

```js
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    // eslint-disable-next-line
    const createBlogsPosts = new Promise((resolve, reject) => {
        try {
            graphql(`
            {
                allDatoCmsArticle {
                    edges {
                        node {
                        slug
                        }
                    }
                }
            }
            `).then( res => {
                const posts = res.data.allDatoCmsArticle.edges;
                posts.map( ( { node: post } ) => {
                    const { slug } = post;

                    createPage({
                        path: `/blog/${slug}`,
                        component: path.resolve('./src/components/templates/article.js'),
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
```

Here we are creating pages based on the model `Article`, the GraphQL endpoint will be `allDatoCmsArticle`.

This theme uses `gatsby-source-datocms` [visit the documentation](https://www.gatsbyjs.com/plugins/gatsby-source-datocms/) for all the options.

7. **Components, Blocks, Bricks, Structures and Templates**

In the components directory, they are separated following a pattern similar to Atomic Design.

```shell
├── components
      ├── blocks
      ├── bricks
      ├── structures
      └── templates
```

Blocks represent the fields that exist in the CMS and are a collection of Bricks, Bricks are the building blocks for our components, Structures are sections made with bricks, like our Navigation or Header, and Finally we have templates that puts together Blocks and Structures.

8. **Gatsby Documentation**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

8. **DatoCMS Documentation**

    - [Documentation](https://www.datocms.com/docs)

    - [Content Modeling](https://www.datocms.com/docs/content-modelling)

# Do you have a website project? Let's talk
