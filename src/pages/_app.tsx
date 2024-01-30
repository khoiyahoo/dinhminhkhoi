import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@src/layouts/MainLayout";
import { Fragment } from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO } from "@src/constants/common";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="alternate icon" href="/favicon.svg" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="google" content="notranslate" />
      </Head>

      <DefaultSeo {...DEFAULT_SEO} />

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Fragment>
  );
}
