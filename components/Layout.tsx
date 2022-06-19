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
        <div className="min-h-screen w-screen bg-white dark:bg-black flex-col flex justify-between">
          <div className="flex-col space-y-2 absolute left-8 top-6">
            <Header />
          </div>
          <div className="absolute left-8 bottom-6">
            <ThemeSwitch />
          </div>

          <main>{children}</main>
          <div className="flex-col space-y-2 absolute right-8 bottom-6">
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
