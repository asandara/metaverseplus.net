import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import Layout from "../components/layouts";
import { useRef, useState, useEffect } from "react";

const OurServices = () => {
  const [activeStatus, setActiveStatus] = useState(1);

  return (
    <Layout>
      <center className="container h-fit">
        <div
          className="w-full overflow-hidden relative"
          style={{ maxHeight: "75vh" }}
        >
          <div className="flex text-white space-x-4 text-left font-semibold absolute top-0 left-0 my-2 mx-4">
            <Link href="/">Home</Link>
            <span>{">"}</span>
            <Link href="/our_services">Our Services</Link>
          </div>
          <img src="/images/our_services.png" className="w-full" />

          <div className="align-text-bottom sm:pl-12 pl-4 absolute bottom-0">
            <h1 className="font-bold text-white text-left text-2xl">
              Our Services
            </h1>
            <br />
            <p className="text-left text-sm md:text-base sm:pr-12 pr-6">
              We offer expert services ranging from Concept Design to complete
              Game Production. We don’t make just games, instead, we create the
              technology behind them, the absorbing concepts, the juicy
              animations, the kicking audio, and the social draw. Our services
              are unrivaled in the industry, and we collaborate with leading
              players to help them achieve the best business outcomes.
              <br />
              <br /> <br />
            </p>
          </div>
        </div>

        <br />
        <br />
        <div className="md:w-10/12 w-11/12 flex justify-center">
          <div>
            <div className="    shadow rounded">
              <ul className="flex  px-5">
                <li
                  onClick={() => setActiveStatus(1)}
                  إ
                  className={
                    activeStatus == 1
                      ? "border-b-1 border-custom_purple transform transition duration-500  pt-3 rounded-t text-custom_purple  px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
                      : " text-white transform transition duration-500 border-b-1 border-custom_purple border-opacity-30 pt-3    hover:text-custom_purple px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 cursor-pointer"
                  }
                >
                  <div className="flex items-center mb-3">
                    <span></span>
                    <span className=" font-normal text-lg">
                      {activeStatus == 1 ? "Blockchain" : "Blockchain"}
                    </span>
                  </div>
                </li>
                <li
                  onClick={() => setActiveStatus(2)}
                  className={
                    activeStatus == 2
                      ? "border-b-1 transform transition duration-500 border-custom_purple   pt-3 rounded-t text-custom_purple px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
                      : " text-white transform transition duration-500  border-b-1 border-custom_purple border-opacity-30 pt-3    hover:text-custom_purple px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 cursor-pointer"
                  }
                >
                  <div className="flex items-center mb-3">
                    <span></span>
                    <span className=" font-normal text-lg">
                      {activeStatus == 2 ? "Game" : "Game"}
                    </span>
                  </div>
                </li>
                <li
                  onClick={() => setActiveStatus(3)}
                  className={
                    activeStatus == 3
                      ? "border-b-1 transform transition duration-500 border-custom_purple   pt-3 rounded-t text-custom_purple px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
                      : " text-white  transform transition duration-500 border-b-1 border-custom_purple border-opacity-30 pt-3    hover:text-custom_purple px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 cursor-pointer"
                  }
                >
                  <div className="flex items-center mb-3">
                    <span></span>
                    <span className=" font-normal text-lg">
                      {activeStatus == 3 ? "Metaverse" : "Metaverse"}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:w-10/12 w-11/12 xl:gap-x-32 lg:gap-x-20 md:gap-x-8  gap-y-20">
          {activeStatus == 1 && (
            <>
              {" "}
              <ServiceCard
                props={{
                  svg: <img src="./decentralized.svg" />,
                  title: "Decentralized Finance (DeFi)",
                  desc: "We benefit from the knowledge and experience we have in the industry to be an excellent aid for organizations to adopt Decentralized Finance-based solutions to operate their operations with an optimized, improved, and enhanced overall security. We guide our clients in the design, implementation, and exploitation of distributed, transparent, fast, and secure Blockchain-powered financial products and services accessible to anyone.",
                }}
              />{" "}
              <ServiceCard
                props={{
                  svg: <img src="./smart.svg" />,
                  title: "Smart Contracts",
                  desc: "We introduce, establish, and design decentralized solutions that enable transactions and agreements to be carried out in a permanent, fast, transparent, and secure way without the need for any central mechanisms or third parties. We help clients cut down on complexity and costs associated with traditional methods without compromising authenticity and credibility.",
                }}
              />
              <ServiceCard
                props={{
                  svg: <img src="./digital.svg" />,
                  title: "Digital Tokenization",
                  desc: "We introduce and design solutions to leverage token economics and non-fungible tokens (NFTs) in order to strengthen the ownership of digital assets. Through digital tokenization, we help organizations to develop novel and revolutionary business models that can significantly benefit industries.",
                }}
              />
              <ServiceCard
                props={{
                  svg: <img src="./platform.svg" />,
                  title: "Platforms Consulting & Development",
                  desc: "We help our clients devise and implement tailored Blockchain-powered solutions for key businesses and industries. We provide strategic consulting on how to effectively leverage Blockchain for business transformation.",
                }}
              />
            </>
          )}
          {activeStatus == 2 && (
            <>
              <ServiceCard
                props={{
                  svg: <img src="./development.svg" />,
                  title: "Gaming development",
                  desc: "Includes firms that create and develop video, mobile, and PC digital games, include creating, designing, and developing software for all aspects of video and mobile games and implementing the creative content to ensure compatibility with video and mobile display.",
                }}
              />
              <ServiceCard
                props={{
                  svg: <img src="./online.svg" />,
                  title: "Online game",
                  desc: "Includes firms engaged in developing and offering support services to enable free or paid online gaming played through the internet, computer network, or E-gaming devices, downloadable from app stores, or through CDs. These firms are not allowed to operate or conduct electronic applications, such as gambling apps that contravene the prevailing legislation in UAE, as well as shameless apps.",
                }}
              />
              <ServiceCard
                props={{
                  svg: <img src="./venue.svg" />,
                  title: "Game Venue",
                  desc: "We operate venues where people get together to play electronic and video games, as well as host E-sports competitions.",
                }}
              />
              <ServiceCard
                props={{
                  svg: <img src="./production.svg" />,
                  title: "Gaming production service provider",
                  desc: "Includes firms providing services to assist all of the needs of companies involved in the gaming industry, including audio development, audio localization, casting and talent management services, tool development, co-development, remastering, sound design and music, voice recording and facial video capture, asset integration, pre-production and script adaptation, postproduction, mastering and mixing, functional testing services, hardware certification testing, user experience testing, quality.",
                }}
              />
              <ServiceCard
                props={{
                  svg: <img src="./gaming.svg" />,
                  title: "Gaming streaming social media platforms",
                  desc: "We make live stream digital platforms through which gaming videos and E-sports competitions are streamed and offer a gaming social media platform in which the gaming community can interact.",
                }}
              />
              <ServiceCard
                props={{
                  svg: <img src="./localization.svg" />,
                  title: "Gaming localization services",
                  desc: "We provide localization services, including language translation and general cultural accuracy in respect of gaming content, advertising, marketing, and branding materials for the gaming industry.",
                }}
              />
            </>
          )}
          {activeStatus == 3 && (
            <>
              <ServiceCard
                props={{
                  svg: <img src="./projection.svg" />,
                  title: "Projection to metaverse",
                  desc: "Exploring the business needs, the fit of different existing metaverses, the limitations, the implementation and operation costs involved, and a custom creation program plan for your particular scenario, need something more powerful than the Strategic Consulting program.We aid brands to explore the different storytelling options available to digitize their culture and services and define the proper steps for implementation with the proper art style and visualization support.",
                }}
              />
              <ServiceCard
                props={{
                  svg: <img src="./virtualworld.svg" />,
                  title: "Virtual world & Digital twins",
                  desc: "We provide excellent aid for the top metaverses gateway and systems providers worldwide by supporting their products.We CoCreate Simulations, Synthetic environments, and Industry 4.0 Software solutions that support our client implementations and visions of the Metaverse.",
                }}
              />
              <ServiceCard
                props={{
                  svg: <img src="./virtual.svg" />,
                  title: "Virtual production",
                  desc: "We establish the most persuasive and flexible visual assets that support different campaigns that fit with different industries.We are experts in using game engines. We design and implement product showcases and virtual venues and provide event support and immersive training development",
                }}
              />
            </>
          )}
        </div>
      </center>
    </Layout>
  );
};

export default OurServices;
