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
                <a href="/docs/category/sql/" class="nav__icons"> <img src="/icons/sql.svg" title="SQL" alt="SQL" /> </a>
                <a href="/docs/category/python/" class="nav__icons"> <img src="/icons/python.svg" title="Python" alt="Python" /> </a>
                <a href="/docs/category/GitHub/" class="nav__icons" > <img src="/icons/github.svg" title="GitHub" alt="GitHub" /> </a>

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
                <a href="https://www.youtube.com/watch?v=GrTV59Y84S8&list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63&ab_channel=RecodeHive" class="nav__icons"> <img src="/icons/git.svg" alt="HTML" /> </a>

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
              <a  class="border-r col-span-1" href="https://codeharborhub.github.io/dsa/" target="_self"> Interview Prep </a>
              <div class="grid grid-cols-1 col-span-2">
                <a href="https://codeharborhub.github.io/dsa/problems/" target="_self" class="nav__icons"> 🧩Technical </a> <br />
                <a href="https://codeharborhub.github.io/dsa/solutions/" target="_self" class="nav__icons  "> 💡Behaviour </a>
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
              label: "📜Projects",
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
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: " ",
    //       items: [
    //         {
    //           html: `
    //               <div class="footer_info--container">
    //                 <img src="/img/logo.png" alt="Footer logo" />
    //                 <span>
    //                 Our mission at RecodeHive  is clear: to provide accessible and comprehensive educational resources to learners of all levels, from beginners to advanced professionals.
    //                 </span>
    //               </div>
    //             `,
    //         },
    //       ],
    //     },
    //     {
    //       title: "Resources",
    //       items: [
    //         {
    //           label: "Tutorials",
    //           to: "/docs",
    //         },
    //         {
    //           label: "Courses",
    //           to: "/courses",
    //         },
    //         {
    //           label: "DSA Problems",
    //           to: "#",
    //         },
    //         {
    //           label: "DSA Solutions",
    //           to: "#",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Company",
    //       items: [
    //         {
    //           label: "About",
    //           to: "/about/",
    //         },
    //         {
    //           label: "Contact",
    //           to: "/contact/",
    //         },
    //         {
    //           label: "Careers",
    //           to: "/careers/",
    //         },
    //         {
    //           label: "Team",
    //           to: "/community/team/",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Terms/Conditions",
    //       items: [
    //         {
    //           label: "Privacy Policy",
    //           to: "/privacy-policy/",
    //         },
    //         {
    //           label: "Terms of Service",
    //           to: "/terms-service/",
    //         },
    //         {
    //           label: "Code of Conduct",
    //           to: "/code-of-conduct",
    //         },
    //         {
    //           label: "Cookie Policy",
    //           to: "/cookie-policy",
    //         },

    //         {
    //           label: "License",
    //           to: "/License/",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Quick Links",
    //       items: [
    //         {
    //           label: "Blog",
    //           to: "/blog",
    //         },
    //         {
    //           label: "Community",
    //           to: "/community/",
    //         },
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/codeharborhub",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Social Media",
    //       items: [
    //         {
    //           label: "LinkedIn",
    //           href: "https://www.linkedin.com/company/codeharborhub/",
    //         },
    //         {
    //           label: "YouTube",
    //           href: "https://www.youtube.com/",
    //           icon: "faYoutube",
    //         },
    //         {
    //           label: "Discord",
    //           href: "https://discord.gg/c53FQn3pRv",
    //         },
    //         {
    //           label: "Twitter(X)",
    //           href: "https://twitter.com/CodesWithAjay",
    //         },
    //       ],
    //     },
    //   ],
    //   logo: {
    //     alt: "Powered by Recodehive | Product Hunt",
    //     src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=464236&theme=light",
    //     href: "https://www.producthunt.com/posts/codeharborhub",
    //   },
    //   copyright: `Copyright © ${new Date().getFullYear()} CodeHarborHub, Made by <a href="https://github.com/sanjay-kv">Sanjay Viswanathan</a>`,
    // },
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
