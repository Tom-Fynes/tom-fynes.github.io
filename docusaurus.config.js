import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tom Fynes",
  tagline: "Software Engineer",
  favicon: "img/TF_logo.png",

  url: "https://tom-fynes.github.io/",
  baseUrl: "/",
  organizationName: "Tom-Fynes",
  projectName: "https://github.com/tom-fynes.github.io",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          sidebarPath: "./sidebars.js",
          routeBasePath: "docs/",
          breadcrumbs: true,
          showLastUpdateAuthor: true,
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
        },
        pages: {
          path: "src/pages",
          routeBasePath: "",
          include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          mdxPageComponent: "@theme/MDXPage",
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "Recent Posts",
          postsPerPage: 10,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/TF_logo.png",
      navbar: {
        title: "Tom F",
        logo: {
          alt: "My Site Logo",
          src: "img/TF_logo.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "skills", label: "Skills", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "SQL 101",
            to: "/docs/intro",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Courses",
            items: [
              {
                label: "SQL 101",
                to: "/docs/intro",
                description: "Learn the basics of SQL",
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "GitHub",
                href: "https://www.github.com/Tom-Fynes",
              },
              {
                label: "Stack Overflow",
                href: "https://www.stackoverflow.com/users/7031452/tom",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/thomas-f-b00607163/",
              },
              {
                label: "X",
                href: "https://www.twitter.com/_tom_codes",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "tf.dev@icloud.com",
                to: "mailto:tf.dev@icloud.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tom Fynes, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
