import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@src/layouts/MainLayout";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Fragment>
  );
}
