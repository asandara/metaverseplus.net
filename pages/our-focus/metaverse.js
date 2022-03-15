import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";
import React from "react";

import { useRef, useState, useEffect } from "react";
const Metaverse = () => {
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
      <div className="container py-5 px-4 text-white">
        <Meta
          title="Metaverse"
          description="Metaverse basically and largely can be defined as multiple
            interconnected virtual spaces or a combination of several technology
            elements, including virtual reality and augmented reality, aiming to
            imitate the real world"
        />
        <div
          className={
            "md:flex lg:justify-between justify-end w-full top-0 pb-5 z-50 sticky bg-primary text-white bg-primary " +
            opacity
          }
        >
          <div className="hidden lg:inline">
            <Link href="/">
              <img src="../logo.svg" width="80%" className="cursor-pointer" />
            </Link>
          </div>
          <Header />
        </div>
        <div
          className="w-full overflow-hidden relative"
          style={{ maxHeight: "75vh" }}
        >
          <div className="flex space-x-3 text-white text-left font-semibold translate-y-9  translate-x-5 ">
            <Link href="/">Home</Link>
            <span>{">"}</span>
            <Link href="/our-focus/metaverse">Our focus</Link>
            <span>{">"}</span>
            <Link href="/our-focus/metaverse">Metaverse</Link>
          </div>
          <img src="/images/metaverse.png" className="w-full" />
        </div>
        <br />
        <br />
        <div className="md:full w-11/12">
          <h1 className="font-bold text-white text-left ">Metaverse</h1>
          <br />
          <p className="text-left">
            Metaverse basically can be defined as multiple interconnected
            virtual spaces or a combination of several technology elements,
            including virtual reality and augmented reality, aiming to imitate
            the real world. But there is an aspect of metaverse that completely
            distinguishes it from today’s internet: the Blockchain. Metaverse
            might look like a recent word among people. The concept of metaverse
            has existed for more than two decades. Neal Stephenson’s use of
            “metaverse” in his 1992 sci-fi novel Snow Crash was unprecedented.
            Fast forward to 2022, the metaverse is a digital world consisting of
            various technologies such as virtual reality, Augmented reality,
            cryptocurrency, and the internet. Metaverse provides a virtual world
            where users could have their characters called avatars. They can
            behave as they behave in the real world. They can trade, play,
            communicate, et cetera. in the metaverse, sounds are transferred to
            the user. There are some sensors to transfer the senses to the user
            and a microphone to communicate with other users.
            <br /> Literally, it is the second world for users. To some extent,
            the metaverse has been involved in gaming. Nowadays, the metaverse
            is involved with computers, consuls, and mobile games. Players play
            with their characters that exist in the game either alone or with
            other characters somewhere else that belong to other players.
            Players live in their second life, which is the game universe.
            Metaverse games nowadays have decentralized, player-owned, and
            in-game assets and the right to distribute them.
            <br />
            As mentioned, Blockchain is the crucial difference between metaverse
            and today’s internet. Blockchain is a technology for permanently and
            officially recording information. It is a global, transparent,
            secure, and popular way for recording and securing pieces of
            information.
          </p>
        </div>
        <div className="mt-40"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Metaverse;
