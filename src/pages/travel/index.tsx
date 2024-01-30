import { type FC } from "react";
import HeroSection from "@src/components/HeroSection";
import HeroTravelContainer from "@src/components/HeroTravelContainer";
import TravelSection from "@src/components/TravelSection";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { getCanonicalUrl } from "@src/utils/common";

const Travel: FC = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={getCanonicalUrl("travel")}
          key="canonical"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <NextSeo title="Explore Travel | Site of Khoi" />
      <HeroSection>
        <HeroTravelContainer />
      </HeroSection>
      <div className="bg-gray-500">
        <TravelSection />
      </div>
    </>
  );
};
export default Travel;
