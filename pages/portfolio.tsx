import { ReactElement } from "react";
import Layout from "../components/layout/Layout";
import PortfolioHero from "../components/pages/portfolio/PortfolioHero";
import type { NextPageWithLayout } from "./_app";

const Portfolio: NextPageWithLayout = () => {
  return <PortfolioHero />;
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <main className="h-screen flex flex-col justify-center self-center pb-16">
        {page}
      </main>
    </Layout>
  );
};

export default Portfolio;
