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
          <div className="flex-col space-y-2 fixed left-8 top-6 z-50">
            <Header />
          </div>
          <div className="fixed left-8 bottom-6">
            <ThemeSwitch />
          </div>

          <main className="overflow-y-scroll">{children}</main>
          <div className="flex-col space-y-2 fixed right-8 bottom-6">
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
