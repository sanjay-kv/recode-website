import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Recode Hive",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "RecodeHive",
      logo: {
        alt: "RecodeHive Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "dropdown",
          html: '<span class="nav-emoji">📚</span> Docs',
          position: "left",
          items: [
            {
              type: "html",
              value: `<div class="grid grid-cols-3 gap-4 w-xl">
              <a class="border-r col-span-1" href="/docs/">Tutorials</a>
              <div class="grid grid-cols-4 col-span-2">
                <a href="/docs/category/html/" class="nav__icons"> <img src="/icons/html-5.svg" title="HTML5" alt="HTML" /> </a>
                <a href="/docs/category/css/" class="nav__icons"> <img src="/icons/css.svg" title="CSS" alt="CSS" /> </a>
                <a href="/docs/category/javascript/" class="nav__icons" > <img src="/icons/js.svg" title="JavaScript" alt="JavaScript" /> </a>
                <a href="/docs/category/react/" class="nav__icons"> <img src="/icons/jsx.svg" title="React.Js" alt="React" /> </a>
                <a href="/docs/category/typescript/" class="nav__icons"> <img src="/icons/ts.svg" title="TypeScript" alt="TypeScript" /> </a>
                <a href="#" class="nav__icons"> <img src="/icons/py.svg" title="Python" alt="Python" /> </a>
                <a href="/docs/category/tailwind/" class="nav__icons"> <img src="/icons/tailwind-css.svg" title="Tailwind CSS" alt="Tailwind" /> </a>
                <a href="/docs/category/next-js/" class="nav__icons"> <img src="/icons/next-js.svg" title="NextJs" alt="Next" /> </a>
              </div>
            </div>`,
            },

            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },

            {
              type: "html",
              value: `<div class="grid grid-cols-3 gap-4">
              <a class="border-r col-span-1" href="/courses/"> Courses </a>
              <div class="grid grid-cols-4 col-span-2">
                <a href="/courses/category/html" class="nav__icons"> <img src="/icons/html-5.svg" alt="HTML" /> </a>
                <a href="/courses/category/reactjs/" class="nav__icons"> <img src="/icons/jsx.svg" alt="React" /> </a>
              </div>
            </div>`,
            },

            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },

            {
              type: "html",
              value: `<div class="grid grid-cols-3 gap-4">
              <a  class="border-r col-span-1" href="https://codeharborhub.github.io/dsa/" target="_self"> DSA </a>
              <div class="grid grid-cols-1 col-span-2">
                <a href="https://codeharborhub.github.io/dsa/problems/" target="_self" class="nav__icons"> 🧩Problems </a> <br />
                <a href="https://codeharborhub.github.io/dsa/solutions/" target="_self" class="nav__icons  "> 💡Solutions </a>
              </div>
            </div>`,
            },
          ],
        },
        {
          to: "/showcase",
          html: '<span class="nav-emoji">🌍</span> Showcase',
          position: "left",
        },
        {
          to: "/community",
          html: '<span class="nav-emoji">🤝</span> Community',
          position: "left",
        },
        {
          to: "/our-sponsors/",
          html: '<span class="nav-emoji">💰</span> Donate',
        },
        {
          to: "/blogs",
          html: '<span class="nav-emoji">📰</span> Blogs',
        },
        {
          type: "dropdown",
          html: '<span class="nav-emoji">🔗</span> More',
          position: "left",
          items: [
            {
              label: "Projects",
              to: "/projects/",
            },
            {
              label: "📚 E-books",
              to: "/ebooks/",
            },

            {
              label: "🛣️ Roadmap",
              to: "/roadmap/",
            },
            // {
            //   label: "🧑‍💻 Live Editor",
            //   to: "/LiveEditor/",
            // },
            // {
            //   label: "📺 Broadcast",
            //   to: "https://codeharborhub-broadcast-web.vercel.app/",
            // },
          ],
        },
        // {
        //   type: "dropdown",
        //   html: '<span class="nav-emoji">🏷️</span> Tags',
        //   position: "left",
        //   items: [
        //     {
        //       label: "🏷️ Tutorial Tags 📚",
        //       to: "/docs/tags/",
        //       activeBaseRegex: "/docs/tags/",
        //     },
        //     {
        //       label: "🏷️ Courses Tags 🎓",
        //       to: "/courses/tags/",
        //       activeBaseRegex: "/courses/tags/",
        //     },
        //     {
        //       label: "🏷️ DSA Tags 🧠",
        //       to: "/dsa/tags/",
        //       activeBaseRegex: "/dsa/tags/",
        //     },
        //   ],
        // },
        {
          type: "search",
          position: "right",
        },
        // {
        //   href: "https://github.com/codeharborhub/codeharborhub",
        //   position: "right",
        //   className: "header-github-link",
        //   "aria-label": "GitHub repository",
        // },
        // {
        //   href: "https://www.codeharborhub.live/register",
        //   position: "right",
        //   className: "header-signup-link",
        //   "aria-label": "Auth",
        //   label: "Auth",
        // },
      ],
      // hideOnScroll: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
};

export default config;
