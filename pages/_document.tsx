import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class SpecialDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SpecialDocument;
