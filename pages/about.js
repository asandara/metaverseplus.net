import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";
import React from "react";
import Image from "next/image";

import { useRef, useState, useEffect } from "react";
const AboutUs = () => {
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
      <div className="text-white">
        <Meta title="Metaverse Plus" />
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
        <div
          className="container w-full overflow-hidden relative"
          style={{ maxHeight: "75vh" }}
        >
          <div className=" flex text-white space-x-4 text-left font-semibold absolute top-0 left-0 my-2 mx-4">
            <Link href="/">Home</Link>
            <span>{">"}</span>
            <Link href="/about">About Us</Link>
          </div>
          <img src="/images/back.png" className="w-full" />
        </div>
        <br />
        <br />
        <div className="container md:full w-11/12">
          <h1 className="font-bold text-white text-left ">
            Read more about us ,
          </h1>
          <br />
          <p className="text-left">
            Establishing a virtual world is one of the objectives of humanity in
            the coming future. Obviously, there will be a lot of tough and
            complex paths will show up that should be passed. Passing these ways
            needs a lot of effort. Metaverse Plus is working to achieve this
            goal.
            <br />
            <br />
            <br />
            <br /> Metaverse is a new technology company endeavoring to
            accomplish its goals with the best staff and attempting to solve
            those problems and difficulties that have seemed impossible in the
            past. We know that the technology universe is continuously involved
            in enhancement, improvement, and updates. That is what makes us dive
            into this field with the best and up-to-date technologies, and a
            conquest plan aims to help you pass long and complex ways and reach
            the success point.
            <br />
            <br />
            <br /> Sectors that Metaverse plus is concerned about consist of
            several technologies that could be the dominant features in the
            future of the technology field and all over the world. If you
            consider your works in the related sectors, the best decision you
            can make is to contact Metaverse Plus support and consult with our
            experts to achieve the best success level and become successful in
            your fields.
          </p>
        </div>
        <div className="mt-40"></div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
