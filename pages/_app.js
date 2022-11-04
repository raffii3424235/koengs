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
        <Navbar />
        <Component {...pageProps} key={router.route} />;
      </AnimatePresence>
    );
  }
}

export default MyApp;
