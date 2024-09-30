import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/toaster"

export default function Layout({ children }: any) {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (router.pathname.split("/")[1] === "") {
      setSelected("home");
    } else if (
      router.pathname.split("/").length === 3 &&
      router.pathname.includes("portfolio")
    ) {
      setSelected(router.pathname.includes("stick-and-choke") ? "stick-and-choke" : "portfolioDemo");
    } else if (router.pathname.split("/").length === 2) {
      setSelected(router.pathname.split("/")[1]);
    }
  }, [router]);

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
        <div className="min-h-screen w-screen bg-white dark:bg-black flex-col flex justify-between z-[99] relative scrollbar-hide">
          {selected === "portfolioDemo" && (
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
