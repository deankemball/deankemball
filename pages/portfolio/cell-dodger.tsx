import { ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import type { NextPageWithLayout } from "../_app";
import CellDodger from "../../components/pages/portfolio/CellDodger";

const Portfolio: NextPageWithLayout = () => {
  return <CellDodger />;
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
