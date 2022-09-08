import { ReactElement } from "react";
import Layout from "../components/layout/Layout";
import MerchBabe from "../components/pages/portfolio/MerchBabe";
import type { NextPageWithLayout } from "./_app";

const Portfolio: NextPageWithLayout = () => {
  return <MerchBabe />;
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <main className="h-screen flex flex-col justify-start self-center">
        {page}
      </main>
    </Layout>
  );
};

export default Portfolio;
