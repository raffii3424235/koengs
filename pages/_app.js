import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import App from "next/app";
import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <AnimatePresence exitBeforeEnter>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>{Component.title}</title>
          <link rel="icon" href="/logo.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="this in my portfolio website with nextjs and tailwindcss"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="kungs" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={Component.title} />
          <meta
            property="og:description"
            content="this in my portfolio website with nextjs and tailwindcss"
          />
          <meta
            property="og:image"
            content="https://www.kungs.my.id/logo.png"
          />
          <meta property="og:url" content="https://kungs.my.id" />
        </Head>
        <Navbar />
        <Component {...pageProps} key={router.route} />;
      </AnimatePresence>
    );
  }
}

export default MyApp;
