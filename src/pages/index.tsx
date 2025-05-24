import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";

import Head from "@docusaurus/Head";
import Header from "../components/header/header";
import ScrollBottomToTop from "../components/scroll/bottom-to-top";
import ScrollTopToBottom from "../components/scroll/top-to-bottom";
import { BlogCarousel } from "../components/blogCarousel/blogCarousel";
import projectsData from "../database/projects/projects";
import OurProjects from "../components/ourProjects";
import TopMateSection from "../components/topmate/TopMateSection";
import { TestimonialCarousel } from "../components/testimonials/TestimonialCarousel";
import { CommunityStatsProvider } from "../lib/statsProvider";
import { LandingCommunity } from "../components/Community";
import FAQs from "../components/faqs/faqs";

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <Layout
    //   title={`${siteConfig.title}`}
    //   description="Welcome to Recodehive. Learn the basics to advanced concepts of web development. sql, python, Cloud, GitHub and more."
    // >
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
          crossOrigin="anonymous"
        />
        <script
          async
          custom-element="amp-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
        />
        <meta name="google-adsense-account" content="ca-pub-5832817025080991" />
      </Head>
      <main className="bg-gradient-to-b from-white to-white/50">
        <div className="m-4">
          <Header />
        </div>
        <div className="m-4">
          <BlogCarousel />
        </div>
        <div className="m-4">
          <img
            src="/selfhero.png"
            alt="recodehive"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="m-4">
          <OurProjects OurProjectsData={projectsData} />
        </div>
        <div className="m-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="col-span-1">
            <TopMateSection />
          </div>
          <div className="col-span-2">
            <TestimonialCarousel />
          </div>
        </div>
        <div className="m-4">
          <CommunityStatsProvider>
            <LandingCommunity className="codeharborhub" />
          </CommunityStatsProvider>
        </div>
        <div className="m-4">
          <FAQs />
        </div>

        <ScrollTopToBottom />
        <ScrollBottomToTop />
      </main>
    </>
    // </Layout>
  );
}
