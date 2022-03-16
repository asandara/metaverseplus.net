import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
import { useRef, useState, useEffect } from "react";
Layout.defaultProps = {
  title: "Metaverse Plus",
  description:
    "Establishing a virtual world is one of the objectives of humanity in the coming future. Obviously, there will be a lot of tough and complex paths will show up that should be passed. Passing these ways needs a lot of effort. Metaverse Plus is working to achieve this goal.",
};
export default function Layout({ children, title, description }) {
  const [opacity, setOpacity] = useState("bg-opacity-0");
  const handleScroll = () => {
    if (Math.ceil(window.scrollY) % 5 == 0) {
      if (window.scrollY > 500) {
        setOpacity("bg-opacity-80  backdrop-blur-sm");
      } else {
        let x = Math.ceil((Math.ceil(window.scrollY / 5) * 5) / 4);
        let result = Math.ceil(x / 5) * 5;

        if (result <= 0) {
          setOpacity("bg-opacity-0");
        } else if (result <= 10) {
          setOpacity("bg-opacity-10");
        } else if (result <= 20) {
          setOpacity("bg-opacity-20");
        } else if (result <= 30) {
          setOpacity("bg-opacity-30");
        } else if (result <= 40) {
          setOpacity("bg-opacity-40");
        } else if (result <= 50) {
          setOpacity("bg-opacity-50");
        } else if (result <= 60) {
          setOpacity("bg-opacity-60");
        } else if (result <= 70) {
          setOpacity("bg-opacity-70  backdrop-blur-sm");
        } else if (result <= 80) {
          setOpacity("bg-opacity-80  backdrop-blur-sm");
        } else if (result <= 90) {
          setOpacity("bg-opacity-80  backdrop-blur-sm");
        } else if (result <= 100) {
          setOpacity("bg-opacity-80  backdrop-blur-sm");
        } else if (result >= 100) {
          setOpacity("bg-opacity-80  backdrop-blur-sm");
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="./logo.svg"
          media="(prefers-color-scheme: dark)"
        />

        <meta
          name="keywords"
          content="Gaming , Game , Game Of Tank , Metaverse , Metaverse Game , Metaverse Game Of Tank , Metaverse Game Of Tank , Blockchain , Coin , Game Studio , Unreal Engine , Metaverse Plus , Marketplace"
        />
        <meta name="theme-color" content="#5521B5" />
      </Head>
      <div className="text-white">
        <div className={"top-0 py-5 z-50 sticky  bg-primary " + opacity}>
          <div className="container md:flex text-white lg:justify-between justify-end w-full">
            <div className="hidden lg:inline">
              <Link href="/">
                <img src="../logo.svg" width="80%" className="cursor-pointer" />
              </Link>
            </div>
            <Header />
          </div>
        </div>
        {children}
      </div>
      <div className="mt-40"></div>
      <Footer />
    </div>
  );
}
