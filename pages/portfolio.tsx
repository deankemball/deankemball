import { ReactElement } from "react";
import NextJsCarousel from "../components/Carousel";
import Layout from "../components/Layout";
import type { NextPageWithLayout } from "./_app";

const Portfolio: NextPageWithLayout = () => {
  return <NextJsCarousel />;
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <main>{page}</main>
    </Layout>
  );
};

export default Portfolio;
