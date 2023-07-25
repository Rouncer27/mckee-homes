const dotenv = require("dotenv")
dotenv.config({ path: ".env" })

module.exports = {
  siteMetadata: {
    title: `McKee Homes`,
    description: `McKee Homes`,
    author: `@switchback4ever`,
    metaImg: `src/images/social-media-default.png`,
    siteLogo: `src/images/mckee-full-logo.png`,
    siteUrl: `https://www.mckeehomes.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#154290`,
        theme_color: `#154290`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        verbose: true,
        url: process.env.WORDPRESS_URL,
        schema: {
          perPage: 50,
          timeout: 60000,
          requestConcurrency: 5,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-VPXT1MQXGZ"],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.mckeehomes.com/",
        sitemap: "https://www.mckeehomes.com/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.mckeehomes.com/`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: false,
        headers: {
          "/*": [
            "cache-control: public,max-age=60",
            "X-Frame-Options: sameorigin",
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
            "Feature-Policy: camera 'none'; geolocation 'none'; microphone 'none'",
            "strict-transport-security: max-age=31536000",
            "referrer-policy: same-origin",
          ],
          "/side-panel": [
            "cache-control: public,max-age=60",
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
            "Feature-Policy: camera 'none'; geolocation 'none'; microphone 'none'",
            "X-Frame-Options: ALLOWALL",
            "Referrer-Policy: no-referrer",
          ],
        },
      },
    },

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "AW-780800236",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
  ],
}
