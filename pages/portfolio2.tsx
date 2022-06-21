import { ReactElement } from "react";
import NextJsCarousel from "../components/Carousel";
import Carousel2 from "../components/Carousel2";
import Layout from "../components/Layout";
import type { NextPageWithLayout } from "./_app";

const Portfolio: NextPageWithLayout = () => {
  return <Carousel2 slides={slides} />;
};

const SLIDE_COUNT = 2;
const slides = Array.from(Array(SLIDE_COUNT).keys());

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
