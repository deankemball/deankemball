import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/toaster"
import clsx from "clsx";
import { montserrat } from "pages/_app";

export default function Layout({ children }: any) {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [showBackButton, setShowBackButton] = useState(false)

  useEffect(() => {
    if (router.pathname.split("/")[1] === "") {
      setSelected("home");
    } else if (
      router.pathname.split("/").length === 3 &&
      router.pathname.includes("portfolio")
    ) {
      setSelected(router.pathname.includes("stick-and-choke") ? "stick-and-choke" : router.pathname.includes("merchbabe") ? "merchbabe" : "portfolioDemo");
    } else if (router.pathname.split("/").length === 2) {
      setSelected(router.pathname.split("/")[1]);
    }
  }, [router]);

  useEffect(() => {
    setShowBackButton(selected === 'portfolioDemo' || selected === 'stick-and-choke' || selected === 'merchbabe' )
  }, [selected]);

  return (
    <>
      <ThemeProvider
        attribute="class"
        // forcedTheme="light"
        themes={["light", "dark"]}
        value={{
          light: "light",
          dark: "dark",
        }}
      >
        <div className={clsx(montserrat.className, "min-h-screen w-screen bg-white dark:bg-black flex-col flex justify-between z-[99] relative scrollbar-hide")}>
          {showBackButton && (
            <BackButton link={"/portfolio"} selected={selected} />
          )}
          <div className="flex-col space-y-2 fixed left-8 top-6 z-[99]">
            <Header selected={selected} />
          </div>
          <div className="fixed left-8 bottom-6 z-50">
            <ThemeSwitch selected={selected} />
          </div>

          <main className="overflow-y-scroll scrollbar-hide snap-y snap-mandatory">
            {children}
          </main>
          <div className="flex-col space-y-2 fixed right-8 bottom-6">
            <Footer setSelected={setSelected} selected={selected} />
          </div>
        </div>
        <Analytics />
        <Toaster />
      </ThemeProvider>
    </>
  );
}
