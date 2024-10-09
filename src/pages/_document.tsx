import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const siteUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'https://deankemball.com/';


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
            // crossOrigin="true
          />
        
        <meta name="description" content="Dean Kemball is a freelance Web Designer & Developer" />
        <meta property="og:title" content="Dean Kemball Web Designer & Developer" />
        <meta
          property="og:description"
          content="Web Designer & Developer"
        />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="deankemball.com" />
        <meta
          property="og:image"
          content={`${siteUrl}og.jpg`}
        />
        <link rel="canonical" href="https://deankemball.com/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="000000"></meta>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Dean Kemball Freelance Web Designer & Developer",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Leipzig",
            "addressRegion": "Saxony",
            "postalCode": "04177",
            // "streetAddress": "Helmoltzstr. 15"
          },
          // "telephone": "+49-123-456-7890",
          "url": "https://deankemball.com",
          "sameAs": [
            "https://www.linkedin.com/in/dean-kemball-a81b1b241/",
            "https://github.com/deankemball"
          ]
        }) }} />
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
