import Link from "next/link";
import React from "react";

import Layout from "../components/layouts";
const AboutUs = () => {
  return (
    <Layout title="About Us">
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
      <div className="container w-full">
        <h1 className="font-bold text-white text-left ">
          Read more about us ,
        </h1>
        <br />
        <p className="text-left">
          Establishing a virtual world is one of the objectives of humanity in
          the coming future. Obviously, there will be a lot of tough and complex
          paths will show up that should be passed. Passing these ways needs a
          lot of effort. Metaverse Plus is working to achieve this goal.
          <br />
          <br />
          <br />
          <br /> Metaverse is a new technology company endeavoring to accomplish
          its goals with the best staff and attempting to solve those problems
          and difficulties that have seemed impossible in the past. We know that
          the technology universe is continuously involved in enhancement,
          improvement, and updates. That is what makes us dive into this field
          with the best and up-to-date technologies, and a conquest plan aims to
          help you pass long and complex ways and reach the success point.
          <br />
          <br />
          <br /> Sectors that Metaverse plus is concerned about consist of
          several technologies that could be the dominant features in the future
          of the technology field and all over the world. If you consider your
          works in the related sectors, the best decision you can make is to
          contact Metaverse Plus support and consult with our experts to achieve
          the best success level and become successful in your fields.
        </p>
      </div>
    </Layout>
  );
};

export default AboutUs;
