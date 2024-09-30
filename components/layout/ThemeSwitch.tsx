import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

interface ThemeSwitchProps {
  selected: string;
}

const ThemeSwitch = ({ selected }: ThemeSwitchProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setTheme("dark");
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
        className={clsx(
          "transition-colors",
          selected === "portfolioDemo"
              ? "text-white decoration-white opacity-50 hover:opacity-100 transition-colors select-none -space-y-2 text-2xl md:text-3xl lg:text-4xl cursor-pointer" :
              selected === 'stick-and-choke' ? 
              'text-black decoration-black opacity-50 hover:opacity-100 transition-colors select-none -space-y-2 text-2xl md:text-3xl lg:text-4xl cursor-pointer'
            : "hidden"
        )}
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </>
  );
};

export default ThemeSwitch;
