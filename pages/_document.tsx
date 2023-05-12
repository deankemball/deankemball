import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class SpecialDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="Hubot-Sans.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          ></link>
        </Head>
        <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SpecialDocument;
