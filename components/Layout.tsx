import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "./ThemeSwitch";

export default function Layout({ children }: any) {
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
        <div className="min-h-screen w-screen bg-white dark:bg-black flex-col flex justify-between z-50">
          <div className="flex-col space-y-2 absolute left-8 top-0 pt-6 z-50">
            <Header />
          </div>
          <div className="absolute left-8 bottom-0 pb-6">
            <ThemeSwitch />
          </div>

          <main className="overflow-y-scroll">{children}</main>
          <div className="flex-col space-y-2 absolute right-8 bottom-0 pb-6">
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
