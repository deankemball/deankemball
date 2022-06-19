import type { NextPage } from "next";
import { ThemeProvider } from "next-themes";
import { ReactElement } from "react";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeadInfo from "../components/HeadInfo";
import Layout from "../components/Layout";
import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return <AboutHero />;
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <main className="h-screen flex flex-col justify-center px-8 self-center m-auto max-w-[520px] pb-16">
        {page}
      </main>
    </Layout>
  );
};

export default About;
