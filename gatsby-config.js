/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Panda Eating Lots',
        description: 'A simple description about pandas eating lots...',
        author: 'Canvas Hsu'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'GatsbyJS',
                short_name: 'GatsbyJS',
                start_url: '/',
                background_color: '#6b37bf',
                theme_color: '#6b37bf',
                display: 'standalone',
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
    ],
}
