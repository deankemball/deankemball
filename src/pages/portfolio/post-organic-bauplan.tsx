import { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import type { NextPageWithLayout } from "../_app";
import Head from "next/head";
import PostOrganicBauplan from "@components/pages/portfolio/PostOrganicBauplan";

const Portfolio: NextPageWithLayout = () => {
  return <PostOrganicBauplan />;
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
