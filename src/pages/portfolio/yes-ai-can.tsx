import { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import type { NextPageWithLayout } from "../_app";
import Head from "next/head";
import YesAICan from "@components/pages/portfolio/YesAICan";

const Portfolio: NextPageWithLayout = () => {
  return <YesAICan />;
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>Portfolio—Post-Organic Bauplan</title>
      </Head>
      <main className="h-screen flex flex-col justify-start self-center">
        {page}
      </main>
    </Layout>
  );
};

export default Portfolio;
