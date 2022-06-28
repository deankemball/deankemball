import { ReactElement } from "react";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import type { NextPageWithLayout } from "./_app";

const Portfolio: NextPageWithLayout = () => {
  return <Carousel />;
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
