import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";
import React from "react";

import { useRef, useState, useEffect } from "react";
const Blockchain = () => {
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
      <div className="container p-4 text-white">
        <Meta
          title="Blockchain"
          description="Blockchain is a chain of connected databases called ledgers shared
            among computer network nodes that aims to record transactions and
            track assets. It is a popular place to securely buy, store, and
            trade cryptocurrencies. Blockchain records the pieces of information
            permanently in a decentralized, secure, transparent, and difficult
            to control way, all pieces of information are available for everyone
            to see."
        />
        <div
          className={
            "md:flex lg:justify-between justify-end w-full top-0 pb-5 z-50 sticky bg-primary text-white" +
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
          {" "}
          <div className="flex text-white space-x-4 text-left font-semibold absolute top-0 left-0 my-2 mx-4">
            <Link href="/">Home</Link>
            <span>{">"}</span>
            <Link href="/our-focus/Blockchain">Our Focus</Link>
            <span>{">"}</span>
            <Link href="/our-focus/Blockchain">Blockchain</Link>
          </div>
          <img src="/images/Blockchain.png" className="w-full" />
        </div>
        <br />
        <br />
        <center className="h-fit -translate-y-5">
          <h1 className="font-bold text-white text-left ">
            Blockchain aspects
          </h1>
          <br />
          <p className="text-left">
            Blockchain is a chain of connected databases called ledgers shared
            among computer network nodes that aims to record transactions and
            track assets. It is a popular place to securely buy, store, and
            trade cryptocurrencies. Blockchain records the pieces of information
            permanently in a decentralized, secure, transparent, and difficult
            to control way, all pieces of information are available for everyone
            to see.
            <br />
            <br /> Blockchain collects data together in groups called blocks
            that hold a set of information, which is one of the key differences
            of Blockchain compared to other databases. Each block has a certain
            capacity and contains certain information. Each block is linked to
            the previous block forming a chain. <br />
            <br />
            Blockchain allows data to be held and spread out among different
            networks, and that is the magic of decentralization, because in this
            style of work if even be able to change a piece of information
            somewhere it appears by others, so there is no one be able to cheat
            Blockchain and Blockchain users.
            <br />
            <br />
            Blockchain has a lot more key features. Here are some of the most
            important ones:
            <br />
            <br /> <b>Immutability:</b> Data in blocks are unchanged and
            uncorrupted.
            <br /> <b>Security:</b> Each data is encoded.
            <br /> <b>Anonymous:</b> The identity of users is hidden.
            <br /> <b>Smart contract:</b> Contracts can be written in the
            programming language.
            <br />
            <b> Faster transactions:</b> Transactions done in a faster way
            compared to the traditional bank transaction.
            <br />
            <b>Peer-to-peer transaction:</b> Transactions are done person to
            person.
            <br />
            <br />
            Nowadays, Blockchain is also getting into the gaming industry.
            obviouslyPlayers spend money on games to achieve some goals and
            prove their dominance. Blockchain provides an easier and better way
            than traditional paper money payment. Blockchain provides digital
            assets to trade in the games and buys goods in the game called NFT.
          </p>
        </center>
        <div className="mt-40"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Blockchain;
