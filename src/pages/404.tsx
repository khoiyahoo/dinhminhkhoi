import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Error = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <NextSeo title="Not found | Site of Khoi" />
      <section className="bg-bg-100 pt-[7.5rem] pb-[8.125rem]">
        <div className="container">
          <h2 className="text-center text-[2.1875rem] leading-[2.93rem] mb-[3.75rem] text-[#0A0A0A]">
            We&apos;re sorry the page you requested
            <br />
            cannot be found.
          </h2>

          <div className="text-base text-[#333333] font-normal max-w-[40rem] mx-auto">
            <p>The following are possible reasons:</p>
            <br />
            <p>
              ・The page you requested may have been deleted or does not exist.
            </p>
            <p>・The page you requested may have been changed.</p>
            <br />
            <p>Please check the URL and try again.</p>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/"
              className="bg-conversion-01 outline py-3 px-8 outline-none w-fit font-bold text-text-100 rounded-xl shadow-md shadow-primary"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
