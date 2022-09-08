import { ReactElement } from "react";
import ContactHero from "../components/pages/contact/ContactHero";
import Layout from "../components/layout/Layout";
import type { NextPageWithLayout } from "./_app";

const Contact: NextPageWithLayout = () => {
  return <ContactHero />;
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <main className="h-screen flex flex-col justify-center self-center pb-16">
        {page}
      </main>
    </Layout>
  );
};

export default Contact;
