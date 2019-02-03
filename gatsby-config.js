module.exports = {
  pathPrefix: '/MyFretboard',
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/`,
      },
    },
  ],
  siteMetadata: {
    title: 'My Fretboard',
    description: 'A progressive web app to help practice guitar. Dynamically generates svg diagrams you can print or download.'
  }
}
