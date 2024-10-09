import { ReactElement } from "react";
import IndexHero from "@/components/pages/index/IndexHero";
import Layout from "@/components/layout/Layout";
import type { NextPageWithLayout } from "./_app";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  return <IndexHero />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
      <title>Dean Kemball</title>
      <meta name="description" content="Dean Kemball is a freelance Web Designer & Developer" />
      </Head>
      <main className="h-screen flex flex-col justify-center self-center">
        {page}
      </main>
    </Layout>
  );
};

export default Home;
