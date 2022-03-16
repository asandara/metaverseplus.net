import Link from "next/link";
import React from "react";

import Layout from "../../components/layouts";
const Blockchain = () => {
  return (
    <Layout title="Blockchain">
      <div
        className="container w-full overflow-hidden relative"
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
      <center className="container h-fit -translate-y-5">
        <h1 className="font-bold text-white text-left ">Blockchain aspects</h1>
        <br />
        <p className="text-left">
          Blockchain is a chain of connected databases called ledgers shared
          among computer network nodes that aims to record transactions and
          track assets. It is a popular place to securely buy, store, and trade
          cryptocurrencies. Blockchain records the pieces of information
          permanently in a decentralized, secure, transparent, and difficult to
          control way, all pieces of information are available for everyone to
          see.
          <br />
          <br /> Blockchain collects data together in groups called blocks that
          hold a set of information, which is one of the key differences of
          Blockchain compared to other databases. Each block has a certain
          capacity and contains certain information. Each block is linked to the
          previous block forming a chain. <br />
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
          obviouslyPlayers spend money on games to achieve some goals and prove
          their dominance. Blockchain provides an easier and better way than
          traditional paper money payment. Blockchain provides digital assets to
          trade in the games and buys goods in the game called NFT.
        </p>
      </center>
    </Layout>
  );
};

export default Blockchain;
