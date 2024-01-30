import { type FC } from "react";
import HeroSection from "@src/components/HeroSection";
import OverviewSection from "@src/components/OverviewSection";
import HighlightProjectSection from "@src/components/HighlightProjectSection";
import HeroHomeContainer from "@src/components/HeroHomeContainer";
import Head from "next/head";
import { NextSeo } from "next-seo";

const Home: FC = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`${process.env.baseUrl}` || "https://dinhminhkhoi.vercel.app/"}
          key="canonical"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <NextSeo title="Hi'Im Khoi | Site of Khoi" />
      <HeroSection>
        <HeroHomeContainer />
      </HeroSection>
      <div className="bg-gray-500">
        <OverviewSection />
      </div>
      <HighlightProjectSection />
    </>
  );
};

export default Home;
