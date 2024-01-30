import { type FC } from "react";
import HeroSection from "@src/components/HeroSection";
import HeroContactContainer from "@src/components/HeroContactContainer";
import ContactSection from "@src/components/ContactSection";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { getCanonicalUrl } from "@src/utils/common";

const Contact: FC = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={getCanonicalUrl("contact")}
          key="canonical"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <NextSeo title="Contact Me | Site of Khoi" />
      <HeroSection>
        <HeroContactContainer />
      </HeroSection>
      <div className="bg-gray-500">
        <ContactSection />
      </div>
    </>
  );
};
export default Contact;
