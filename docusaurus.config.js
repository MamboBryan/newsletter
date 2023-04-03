// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "KotlinKenya",
  tagline: "Latest KotlinKenya and Android254 community updates",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "MamboBryan", // Usually your GitHub org/user name.
  projectName: "newsletter", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/kotlinkenya.png",
      navbar: {
        title: "KotlinKenya",
        logo: {
          alt: "Kotlin Community Logo",
          src: "img/logo.svg",
        },
        items: [{ to: "/newsletter", label: "Newsletter", position: "left" }],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "KotlinKenya",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/kotlinKenya",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/kotlinkenya",
              },
              {
                label: "Meetup",
                href: "https://www.meetup.com/kotlinkenya/",
              },
            ],
          },
          {
            title: "Android254",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/android254",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/254androiddevs",
              },
              {
                label: "Meetup",
                href: "https://www.meetup.com/android254/",
              },
            ],
          },
          {
            title: "Github",
            items: [
              {
                label: "KotlinKenya",
                href: "https://github.com/KotlinKenya",
              },
              {
                label: "Android254",
                href: "https://github.com/android254",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "DroidconKe",
                href: "https://droidcon.co.ke/",
              },
              {
                label: "Droid Pwani",
                href: "https://twitter.com/DroidPwani_KE",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KotlinKenya. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["kotlin", "java", "scala"],
      },
      metadata: [
        {
          name: "keywords",
          content:
            "android, kotlin, kotlinkenya, android254, android-kenya, articles, newsletter",
        },
      ],
    }),
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "newsletter",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "newsletter",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./newsletter",
      },
    ],
  ],
};

module.exports = config;
