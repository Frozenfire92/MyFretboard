module.exports = {
  pathPrefix: '/MyFretboard',
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'My Fretboard',
        short_name: 'MyFretboard',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    'gatsby-plugin-offline'
  ],
  siteMetadata: {
    title: 'My Fretboard',
    description: 'A progressive web app to help practice guitar. Dynamically generates svg diagrams you can print or download.'
  }
}
