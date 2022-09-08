import { ReactElement } from "react";
import IndexHero from "../components/pages/index/IndexHero";
import Layout from "../components/layout/Layout";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return <IndexHero />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <main className="h-screen flex flex-col justify-center self-center">
        {page}
      </main>
    </Layout>
  );
};

export default Home;
