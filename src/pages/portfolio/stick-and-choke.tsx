import { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import type { NextPageWithLayout } from "../_app";
import StickAndChoke from "@/components/pages/portfolio/StickAndChoke";
import Head from "next/head";

const Portfolio: NextPageWithLayout = () => {
  return <StickAndChoke />;
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
      <title>Portfolio—Stick & Choke</title>
      </Head>
      <main className="h-screen flex flex-col justify-start self-center">
        {page}
      </main>
    </Layout>
  );
};

export default Portfolio;
