import Link from "next/link";

interface HeaderProps {
  selected: string;
}

function Header({ selected }: HeaderProps) {
  return (
    <Link href={"/"}>
      <a>
        <div
          className={
            selected === "portfolioDemo"
              ? "text-black decoration-black dark:text-white dark:decoration-white opacity-50 hover:opacity-100 transition-colors duration-150 select-none -space-y-2 text-2xl md:text-3xl lg:text-4xl cursor-pointer"
              : "text-black dark:text-white dark:decoration-white hover:text-red dark:hover:text-red transition-colors duration-150 select-none -space-y-2 text-2xl md:text-3xl lg:text-4xl cursor-pointer"
          }
        >
          <p>dean</p>
          <p>kemball</p>
        </div>
      </a>
    </Link>
  );
}

export default Header;
