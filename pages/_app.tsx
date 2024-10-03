import "../styles/globals.css";
import "../src/index.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import {
  ReactElement,
  ReactNode,
} from "react";
import { motion } from "framer-motion";
import { Montserrat } from 'next/font/google'
import clsx from "clsx";
 
export const montserrat = Montserrat({ subsets: ['latin'] })

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  let path = router.route.split("/")[1];
  if (path === "") {
    path = "home";
  }

  return getLayout(
    <motion.div
    className={clsx(montserrat.className)}
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageExit: {
          opacity: 0,
          transition: {
            duration: 0.1,
            ease: "easeOut",
          },
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: 0.15,
            ease: "easeOut",
          },
        },
        pageInitial: {
          opacity: 0,
          transition: {
            duration: 0.15,
            ease: "easeIn",
          },
        },
      }}
    >
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </motion.div>
  );
}
