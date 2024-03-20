module.exports = {
  siteMetadata: {
    title: 'IBM Integration PoT',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/pot`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pot Carbon Design ',
        icon: 'src/images/favicon.svg',
        short_name: 'Pot Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSwitcherEnabled: false,
        isSearchEnabled: false,
        theme:
        {
          homepage: 'g10',
          interior: 'g10',
        },
      },
    },
  ],
};
