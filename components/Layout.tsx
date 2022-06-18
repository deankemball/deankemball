import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }: any) {
  let router = useRouter().asPath.split("/")[1];
  if (router === "") {
    router = "home";
  }
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(router);
  }, [router]);

  return (
    <>
      <div className="min-h-screen w-screen bg-white flex-col flex justify-between px-8 py-6">
        <Header />
        <main>{children}</main>
        <div className="flex-col space-y-2">
          <Footer selected={selected} />
        </div>
      </div>
    </>
  );
}
