import { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import DeanWallflower from "@/components/pages/portfolio/DeanWallflower";
import type { NextPageWithLayout } from "../_app";
import Head from "next/head";

const Portfolio: NextPageWithLayout = () => {
  return <DeanWallflower />;
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
      <title>Portfolio—Dean Wallflower</title>
      </Head>
      <main className="h-screen flex flex-col justify-start self-center">
        {page}
      </main>
    </Layout>
  );
};

export default Portfolio;
