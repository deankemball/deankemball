import { ReactElement } from "react";
import IndexHero from "../components/IndexHero";
import Layout from "../components/Layout";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return <IndexHero />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <main className="h-screen flex flex-col justify-center self-center pb-16">
        {page}
      </main>
    </Layout>
  );
};

export default Home;
