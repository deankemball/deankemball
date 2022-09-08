import { ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import RecipeApp from "../../components/pages/portfolio/RecipeApp";
import type { NextPageWithLayout } from "../_app";

const Portfolio: NextPageWithLayout = () => {
  return <RecipeApp />;
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
