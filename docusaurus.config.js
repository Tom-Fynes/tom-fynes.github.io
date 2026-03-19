import { themes as prismThemes } from "prism-react-renderer";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

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

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      type: "text/css",
    },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    tailwindPlugin,
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "Git-101",
        path: "git_101",
        routeBasePath: "git_101",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "Python-101",
        path: "python_101",
        routeBasePath: "python_101",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "Projects",
        path: "projects",
        routeBasePath: "projects",
        sidebarPath: "./sidebars.js",
      },
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
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
          {
            label: "Courses",
            position: "left",
            type: "dropdown",
            items: [
              {
                label: "SQL 101",
                to: "/docs/intro",
              },
              {
                label: "Git 101",
                to: "/git_101/intro",
              },
              {
                label: "Python 101",
                to: "/python_101/intro",
              },
            ],
          },
          {
            label: "Projects",
            position: "left",
            type: "dropdown",
            items: [
              {
                label: "VS Code Theme",
                href: "https://github.com/Tom-Fynes/nebula-nights",
              },
              {
                label: "SQL Query Optimiser",
                to: "/projects/sql-optimiser",
              },
              {
                label: "Pipelines",
                to: "/pipelines",
              },
            ],
          },
          {
            label: "Resources",
            position: "left",
            type: "dropdown",
            items: [
              {
                label: "Beginner's Data Toolkit",
                to: "https://tfynes.gumroad.com/l/phlyc",
                description: "A collection of notebooks for beginners",
              },
              {
                label: "Git Cheat Sheet",
                href: "/downloads/cheatsheet.jpg",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              {
                label: "SQL Cheat Sheet",
                href: "/downloads/sql_cheatsheet.jpg",
                target: "_blank",
                rel: "noopener noreferrer",
              },
            ],
          },
          { to: "skills", label: "Skills", position: "left" },
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
              {
                label: "Git 101",
                to: "/git_101/intro",
                description: "Learn the basics of Git",
              },
              {
                label: "Python 101",
                to: "/python_101/intro",
                description: "Learn the basics of Python",
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
        copyright: `Copyright © ${new Date().getFullYear()} Tom Fynes.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
