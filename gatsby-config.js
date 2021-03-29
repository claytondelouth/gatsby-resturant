module.exports = {
  siteMetadata: {
    title: "Shark's Bar",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "-hUyLhrz7i_FfHPDHcAUuFaX-h_wthWsV3TqUGUaeO0",
        spaceId: "6ppe5g4v058k",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123456",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
