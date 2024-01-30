import { type FC } from "react";
import HeroSection from "@src/components/HeroSection";
import SkillsSection from "@src/components/SkillsSection";
import HeroAboutContainer from "@src/components/HeroAboutContainer";
import Experience from "@src/components/ExperienceSection";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { getCanonicalUrl } from "@src/utils/common";

const About: FC = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href={getCanonicalUrl("about")} key="canonical" />
        <meta name="robots" content="noindex" />
      </Head>
      <NextSeo title="About Khoi | Site of Khoi" />
      <HeroSection>
        <HeroAboutContainer />
      </HeroSection>
      <div className="bg-gray-500">
        <SkillsSection />
      </div>
      <Experience />
    </>
  );
};
export default About;
