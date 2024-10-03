import { ReactElement } from "react";
import Layout from "../components/layout/Layout";
import type { NextPageWithLayout } from "./_app";
import Head from "next/head";
import ServicesHero from "components/pages/services/ServicesHero";

const Services: NextPageWithLayout = () => {
  return <ServicesHero />;
};

Services.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
      <title>Dean Kemball—Services</title>
      <meta name="description" content="Dean Kemball is a freelance Web Designer & Developer" />
      <meta></meta>
      </Head>
      <main className="h-screen w-screen flex flex-col justify-center px-8 self-center m-auto pb-16 overscroll-none">
        {page}
      </main>
    </Layout>
  );
};

export default Services;
