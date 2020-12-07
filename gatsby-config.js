require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'The Haja Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-fontawesome-css',
    
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'MGZmYjBiMDgtZDNlNy00OGEzLTlkYmItYzdiZDFmZTk1NmFjNjM3NDIwNzA0Mjc2NDEzNjY1',
        autopop: true,
        js: 'https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.js',
        styles: 'https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.css'
      }
    },
  ],
}

