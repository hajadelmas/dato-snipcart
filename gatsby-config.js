require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'The Haja Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'YzVmODBkNTEtNmM0My00ZjlhLWEyODMtYmY4ODMyMWM3YzUyNjM3NDIwNzA0Mjc2NDEzNjY1',
        autopop: true
      }
    },
  ],
}

