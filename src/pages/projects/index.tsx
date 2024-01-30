import { type FC } from "react";
import HeroSection from "@src/components/HeroSection";
import HeroProjectContainer from "@src/components/HeroProjectContainer";
import ProjectSection from "@src/components/ProjectSection";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { getCanonicalUrl } from "@src/utils/common";

const Projects: FC = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={getCanonicalUrl("projects")}
          key="canonical"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <NextSeo title="My Project | Site of Khoi" />
      <HeroSection>
        <HeroProjectContainer />
      </HeroSection>
      <div className="bg-gray-500">
        <ProjectSection />
      </div>
    </>
  );
};
export default Projects;
