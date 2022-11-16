//TODO: Remove this
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: "Inforiver Documentation",
  tagline:
    "Learn how to install, Model, Plan, Simulate, and Analyze with Inforiver",
  //TODO: Change this url
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  noIndex: true, // Defaults to `false`
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  //TODO: Change this favicon
  favicon: "img/favicon.ico",
  organizationName: "Lumel", // Usually your GitHub org/user name.
  projectName: "inforiver-docusaurus", // Usually your repo name.
  //TODO: Install Google analytics
  // plugins: ["@docusaurus/plugin-google-analytics"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themeConfig: {
    //TODO: Configure google analytics 
    // googleAnalytics: {
    //TODO: Know about this.
    //   trackingID: "UA-136298126-1",
    //   // Optional fields.
    //   anonymizeIP: true, // Should IPs be anonymized?
    // },

    navbar: {
      hideOnScroll: true,
      title: "Inforiver Guide",
      logo: {
        alt: "Inforiver Logo",
        src: "img/inforiver-logo.svg",
        href: "/",
      },
      items: [
        {
          to: "/learn/modules/module-a",
          label: "Learn",
          activeBasePath: "/learn",
          position: "left",
        },
        {
          to: "https://docs.inforiver.com/",
          label: "Documentation",
          position: "left",
          //TODO: Check once
          // activeBaseRegex: '^((?!releases|references|how_to_videos).)*$',
          title: "Docs",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Learn",
              to: "/learn/modules/module-a",
            },
            {
              label: "Documentation",
              to: "https://docs.inforiver.com/",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Inforiver Community",
              href: "#url",
            },
            {
              label: "Status",
              href: "#url",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "#url",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lumel`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [require.resolve("docusaurus-lunr-search")],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
