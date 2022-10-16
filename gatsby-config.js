/* eslint-disable no-unused-vars */
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://elpuas.com',
    title: 'Catalina',
    description:
      'Personal Blog, Made with GatsbyJS, DatoCMS, CSS Modules and Tailwind',
    author: 'Alfredo Navas',
    keywords: '',
    twitter: '@3LPU4S',
    linkedIn: 'elpuasdev',
  },
  plugins: [
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.GATSBY_DATO_API_TOKEN,
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'el-puas-blog',
        short_name: 'el-puas',
        start_url: '/',
        background_color: '#D8FF00',
        theme_color: '#D8FF00',
        display: 'minimal-ui',
        icon: 'src/images/skull-icon.png',
        icons: [
          {
            src: 'src/images/skull-icon.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ], // This path is relative to the root of the site.
      },
    },
  ],
};
