// @ts-check

const remarkPlugins = [
  {resolve: 'gatsby-remark-autolink-headers', options: {elements: ['h2', 'h3', 'h4', 'h5']}},
  {resolve: 'gatsby-remark-shiki-twoslash', options: {theme: __dirname + '/src/dark-theme.json'}},
]

module.exports = {
  siteMetadata: {
    title: 'ts-terraform',
    author: '@jacobwgillespie',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: remarkPlugins,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'gatsby-starter-default',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    //   },
    // },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: remarkPlugins,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
