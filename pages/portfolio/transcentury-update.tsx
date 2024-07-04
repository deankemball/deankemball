import { ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import type { NextPageWithLayout } from "../_app";
import TCU from "../../components/pages/portfolio/TCU";

const Portfolio: NextPageWithLayout = () => {
  return <TCU />;
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
