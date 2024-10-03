import { ReactElement } from "react";
import Layout from "../components/layout/Layout";
import PortfolioHero from "../components/pages/portfolio/PortfolioHero";
import type { NextPageWithLayout } from "./_app";
import Head from "next/head";

const Portfolio: NextPageWithLayout = () => {
  return <PortfolioHero />;
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
      <title>Dean Kemball—Portfolio</title>
      <meta name="description" content="Dean Kemball is a freelance Web Designer & Developer" />
      </Head>
      <main className="h-screen flex flex-col justify-center self-center pb-16 md:pb-0">
        {page}
      </main>
    </Layout>
  );
};

export default Portfolio;
