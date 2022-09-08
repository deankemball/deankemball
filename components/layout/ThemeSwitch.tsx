import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface ThemeSwitchProps {
  selected: string;
}

const ThemeSwitch = ({ selected }: ThemeSwitchProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setTheme("light");
    setMounted(true);
  }, []);

  const changeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => changeHandler()}
        className={
          selected === "portfolioDemo"
            ? "text-black decoration-black dark:text-white dark:decoration-white opacity-50 hover:opacity-100 underline underline-offset-2 transition-all duration-150 text-2xl md:text-3xl lg:text-4xl"
            : "text-black dark:text-white text-2xl md:text-3xl lg:text-4xl decoration-red hover:text-red dark:hover:text-red underline underline-offset-2"
        }
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </>
  );
};

export default ThemeSwitch;
