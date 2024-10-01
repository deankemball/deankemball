import { ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import DeanWallflower from "../../components/pages/portfolio/DeanWallflower";
import type { NextPageWithLayout } from "../_app";
import StickAndChoke from "../../components/pages/portfolio/StickAndChoke";
import PostOrganicBauplan from "../../components/pages/portfolio/PostOrganicBauplan";

const Portfolio: NextPageWithLayout = () => {
  return <PostOrganicBauplan />;
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