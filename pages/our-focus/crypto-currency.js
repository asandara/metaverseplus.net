import Link from "next/link";
import React from "react";

import Layout from "../../components/layouts";
const Blockchain = () => {
  return (
    <Layout title="Crypto Currency">
      <div
        className="container w-full overflow-hidden relative"
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
      <div className="container w-full">
        <h1 className="font-bold text-white text-left ">Cryptocurrency</h1>
        <br />
        <p className="text-left">
          The centralized nature and some other problems of fiat necessitated a
          new type of currency to snap people out of this limited traditional
          currency. Cryptocurrency is a digital currency that is secured by a
          cryptographic system. In other words, it is a form of digital payment
          that can circulate without the need of a third party or central
          authority. It can also be defined as a digital, encoded, and
          decentralized medium of exchange. Digital currencies are exchanged
          with one another easily and securely. Instead, Blockchain technology
          lets people trade with their currency securely. As the traditional
          currency, cryptocurrency is an asset that can be traded and bought
          goods with it or even invested with it. Pieces of Information of each
          transaction are secured in a block within the Blockchain. It holds
          them permanently, securely, transparently, and in a decentralized
          process.
          <br />
          <br /> Cryptocurrency provides an easier way of transaction without
          the requirement of a trusted third party. It is a peer-to-peer
          transaction that is done between two real persons freely. Such
          decentralized transfers are secured by using public keys and private
          keys and different incentive systems, such as proof of work or proof
          of stake.
          <br />
          <br /> Cryptocurrency provides virtual assets for gamers in games that
          can be exchanged and traded. Hence, it offers the gaming industry a
          safe and easy medium to make money and allows players to gain money
          for the effort they make in the games.
        </p>
      </div>
    </Layout>
  );
};
export default Blockchain;
