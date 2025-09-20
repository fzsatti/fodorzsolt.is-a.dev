/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'My Personal Webstie',
  author: 'Fodor Zsolt',
  headerTitle: 'Fodor Zsolt',
  description: 'A blog about my journeys',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://fodorzsolt.is-a.dev',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'fodorzsolt92@gmail.ocm',
  github: 'https://github.com/fzsatti',
  linkedin: 'https://www.linkedin.com/in/fodor-zsolt-5a1a89a4/',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  newsletter: {},
  analytics: {},
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
