import { ReactElement } from "react";
import AboutHero from "../components/pages/about/AboutHero";
import Layout from "../components/layout/Layout";
import type { NextPageWithLayout } from "./_app";
import Head from "next/head";

const About: NextPageWithLayout = () => {
  return <AboutHero />;
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
      <title>Dean Kemball—About</title>
      <meta name="description" content="Dean Kemball is a freelance Web Designer & Developer" />
      <meta></meta>
      </Head>
      <main className="h-screen w-screen flex flex-col justify-center px-8 self-center m-auto pb-16 overscroll-none">
        {page}
      </main>
    </Layout>
  );
};

export default About;
