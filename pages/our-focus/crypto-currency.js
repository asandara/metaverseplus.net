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
      <div className="container py-5 px-4 text-white">
        <Meta
          title="Cryptocurrency"
          description="The centralized nature and some other problems of fiat necessitated
            a new type of currency to snap people out of this limited
            traditional currency. Cryptocurrency is a digital currency that is
            secured by a cryptographic system. In other words, it is a form of
            digital payment that can circulate without the need of a third party
            or central authority"
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
            <Link href="/our-focus/Blockchain">Our focus</Link>
            <span>{">"}</span>
            <Link href="/our-focus/crypto-currency">Crypto Currency</Link>
          </div>
          <img src="/images/cryptocurrency.png" className="w-full" />
        </div>
        <br />
        <br />
        <div className="md:full w-11/12">
          <h1 className="font-bold text-white text-left ">Cryptocurrency</h1>
          <br />
          <p className="text-left">
            The centralized nature and some other problems of fiat necessitated
            a new type of currency to snap people out of this limited
            traditional currency. Cryptocurrency is a digital currency that is
            secured by a cryptographic system. In other words, it is a form of
            digital payment that can circulate without the need of a third party
            or central authority. It can also be defined as a digital, encoded,
            and decentralized medium of exchange. Digital currencies are
            exchanged with one another easily and securely. Instead, Blockchain
            technology lets people trade with their currency securely. As the
            traditional currency, cryptocurrency is an asset that can be traded
            and bought goods with it or even invested with it. Pieces of
            Information of each transaction are secured in a block within the
            Blockchain. It holds them permanently, securely, transparently, and
            in a decentralized process.
            <br />
            <br /> Cryptocurrency provides an easier way of transaction without
            the requirement of a trusted third party. It is a peer-to-peer
            transaction that is done between two real persons freely. Such
            decentralized transfers are secured by using public keys and private
            keys and different incentive systems, such as proof of work or proof
            of stake.
            <br />
            <br /> Cryptocurrency provides virtual assets for gamers in games
            that can be exchanged and traded. Hence, it offers the gaming
            industry a safe and easy medium to make money and allows players to
            gain money for the effort they make in the games.
          </p>
        </div>
        <div className="mt-40"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Blockchain;
