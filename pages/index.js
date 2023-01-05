import HomeCard from "../components/HomeCard";
import Layout from "../components/layouts";
import styles from "../styles/Home.module.css";
import AOS from "aos";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import axios from "axios";

import { useSnackbar } from "notistack";
export default function Home() {
  const [isDisable, setisDisable] = useState(false);
  const [email, setEmail] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const errorMessage = (message, isError) => {
    if (isError == true) {
      enqueueSnackbar(message, {
        variant: "error",
      });
    }
    if (isError == false) {
      enqueueSnackbar(message, {
        variant: "success!",
      });
    }
  };
  const sendEmail = () => {
    let data = {
      email: email,
    };

    setisDisable(true);
    try {
      const res = axios
        .post("/api/subscribe", data)
        .then(function (response) {
          let obj = response.data;

          if (obj.message == "success") {
            errorMessage(obj.message, false);
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else {
            errorMessage(obj.message, true);
          }
          setisDisable(false);
        })
        .catch(function (error) {
          if (error.response.data.message != "undefined") {
            errorMessage(error.response.data.message, true);
          }
          setisDisable(false);
        });
    } catch (e) {
      setisDisable(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  });
  return (
    <Layout>
      <div className="home_bg -translate-y-20">
        <div className="h-full flex items-center container">
          <div className="text-white text-cen">
            <h1
              className=" font-bold text-4xl mb-3"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              Metaverse Plus
            </h1>

            <p
              className="break-all w-auto lg:w-5/12 my-10"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              Establishing a virtual world is one of the objectives of humanity
              in the coming future. Obviously, there will be a lot of tough and
              complex paths will show up that should be passed. Passing these
              ways needs a lot of effort. Metaverse Plus is working to achieve
              this goal.
            </p>
            <Link href="/about">
              <div
                className="border-1 border-white py-2 w-52 text-sm rounded-sm cursor-pointer button  button01 "
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
              >
                <center>
                  <h6 className="font-bold">Learn more</h6>
                </center>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="relative">
        <div
          className="container grid place-items-center sm:place-items-start  mt-6 "
          id="about"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <center>
            <img
              src="images/1.png"
              alt="Picture of the author"
              width="80%"
              className="md:hidden mt-20 "
            />
          </center>

          <br />

          <div className="flex md:mt-10 md:w-11/12 xl:w-full text-white ">
            <div className=" md:w-2/3 md:place-items-start md:block grid place-items-center ">
              <h1 className="text-2xl font-bold   md:mb-7 mb-6 text-center md:text-left">
                Is Blockchain the future ?
              </h1>
              <p
                className={
                  "w-full lg:w-10/12 leading-8 md:mb-0  mb-10 md:text-left text-center"
                }
              >
                Traditional currencies and transaction problems make users use a
                distributed ledger which is Blockchain. Centralized, insecure,
                much time need and easily corrupt are problems that traditional
                currencies and transactions have. Blockchain is a decentralized
                system for recording and documenting transactions carried out
                between a peer of people by a typical currency which is digital
                currency. Blockchain security appears when it maintains
                identical copies of ledgers across each member's computer within
                a network, which helps facilitate the Blockchain's security. The
                powerful aspect of Blockchain is that transactions take place
                peer-to-peer, which means there is no need for a trusted third
                party or a central authority. The lack of alternatives for
                traditional currencies left people with no choice and obligated
                them to use this full of problem currency, but in the future
                world, with the presence of an excellent alternative which is
                Blockchain, people no longer have to use traditional currency.
                People have choices. Blockchain technology will likely be
                transformative in the technology and IT sector in the coming
                years, similar to what the internet did for the world back in
                the 90s and early 2000s.
              </p>
            </div>
            <div className=" w-1/3 items-center md:flex hidden justify-center  sm:w-1/12 md:w-2/3">
              <img
                src="images/1.png"
                alt="Picture of the author"
                className="xl:w-8/12 lg:w-11/12 lg:translate-y-10 md:w-11/12 md:translate-y-10   xl:translate-y-8 xl:-translate-x-4 "
              />
            </div>
          </div>
          {
            //
          }
        </div>
        <div className="md:h-52 h-32"></div>

        <center
          className="text-white"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <h1 className="font-bold text-2xl mb-2">Whats our focus ?</h1>
          <h4 className="text-white text-opacity-50">
            Through what we are trying to change
          </h4>
        </center>
        <br />
        <br />
        <div
          data-aos="fade-up"
          data-aos-offset="25"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          className="mb-28 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-28 lg:gap-x-14 sm:gap-x-6  lg:gap-y-0 gap-y-20 md:gap-x-8 container"
        >
          <HomeCard
            props={{
              title: "Blockchain Aspects",
              desc: "Blockchain is a chain of connected databases called ledgers shared among computer network nodes that aims to record transactions and track assets. It is a popular place to securely buy, store, and trade cryptocurrencies. Blockchain records the pieces of information permanently in a decentralized, secure, transparent, and difficult to control way,",
              image: "/images/card2.png",
              link: "our-focus/Blockchain",
            }}
          />
          <HomeCard
            props={{
              title: "Metaverse",
              desc: "Metaverse basically and largely can be defined as multiple interconnected virtual spaces or a combination of several technology elements, including virtual reality and augmented reality, aiming to imitate the real world  But there is an aspect of metaverse that completely distinguishes it from today’s internet: the Blockchain. ",
              image: "/images/card1.png",
              link: "our-focus/metaverse",
            }}
          />
          <HomeCard
            props={{
              title: "Cryptocurrency",
              desc: "The centralized nature and some other problems of fiat necessitated a new type of currency to snap people out of this limited traditional currency. Cryptocurrency is a digital currency that is secured by a cryptographic system. In other words, it is a form of digital payment that can circulate without the need of a third party or central authority",
              image: "/images/card3.png",
              link: "our-focus/crypto-currency",
            }}
          />
        </div>
        <div
          className=" grid place-items-center sm:place-items-start container"
          id="air"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <center>
            <img
              src="images/air.png"
              alt="Picture of the author"
              width="80%"
              className="md:hidden mt-20 "
            />
          </center>

          <br />

          <div className="flex md:mt-10 md:w-11/12 xl:w-full text-white justify-start ">
            <div className=" md:w-2/3 md:place-items-start md:block grid place-items-center ">
              <h1 className="text-2xl font-bold   md:mb-7 mb-6 md:text-left text-center">
                Bring you to the metaverse world
              </h1>
              <p
                className={
                  "w-full lg:w-10/12 leading-8 md:mb-0  mb-10 md:text-left text-center"
                }
              >
                The metaverse world is the world that everyone should
                experience. What we want is to bring you into the metaverse
                world. For this purpose, several things are required, such as
                ability, power, creativity, equipment, enthusiasm, et cetera. We
                are a creative and collaborative team consisting of members full
                of experience and talents. Each member is willing to succeed,
                considering it has been a long time since we worked on this
                project with all we have at the peak of curiosity. Our pieces of
                equipment for this purpose are the most powerful systems.
                Metaverse is a widely used system in the world nowadays.
                Blockchain is the most powerful and secure system for storing
                transactions and data. Cryptocurrency is the digital currency
                that is the best alternative for traditional currencies.
                Considering all we have, nothing stops us. We will bring you
                into the metaverse world.
              </p>
            </div>

            <div className=" w-1/3    md:flex hidden justify-start sm:w-1/12 md:w-3/4 lg:w-3/6">
              <img
                src="images/air.png"
                alt="Picture of the author"
                className="xl:w-5/6 lg:w-11/12    xl:-translate-y-20 lg:-translate-y-14  xl:-translate-x-10 object-none object-scale-down "
              />
            </div>
          </div>

          <div
            className="mb-28  grid place-items-center sm:place-items-start container"
            id="game_studio"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <center>
              <img
                src="images/DigitalMarketing.png"
                alt="Picture of the author"
                height="90%"
                width="90%"
                className="md:hidden mt-20"
              />
            </center>

            <br />

            <div className="flex md:mt-10 md:w-11/12 xl:w-full text-white justify-start items-center ">
              <div className=" w-1/3    md:flex hidden   justify-end sm:w-1/12 md:w-2/3">
                <img
                  src="images/DigitalMarketing.png"
                  alt="Picture of the author"
                  className=" lg:w-full xl:w-5/6 xl:-translate-x-24 lg:-translate-x-10 lg:-translate-y-10 xl:-translate-y-0   "
                />
              </div>
              <div className=" md:w-2/3 md:place-items-start md:block grid place-items-center lg:translate-x-10 xl:translate-x-0">
                <h1 className="text-3xl font-bold   md:mb-7 mb-6 md:text-left text-center">
                  Digital
                  <br /> Marketing
                </h1>
                <p
                  className={
                    "w-full lg:w-10/12 leading-8 md:mb-0   md:text-left text-center  "
                  }
                >
                  At MetaversePlus , we perform digital marketing with all its
                  services. This is one of the smartest ways of marketing for
                  people who want to expand their business professionally.
                  Digital Marketing is a very essential tool if people know how
                  to use it in a right way, but with Metaverseplus , you don’t
                  need to worry as we can take care of your Digital Marketing
                  professionally. This type of marketing involves using social
                  media , website , search engines, and other similar digital
                  medias. Digital marketing requires marketing to customers
                  through any types and amounts of digital media. Digital
                  Marketing is mostly used through Social media platforms and
                  website platforms.
                </p>

                <Link href="/our-services">
                  <div
                    className="border-1 border-white py-2 w-52 text-sm rounded-sm cursor-pointer button  button01 mt-10 "
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                  >
                    <center>
                      <h6 className="font-bold">Our services</h6>
                    </center>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mb-28  grid place-items-center sm:place-items-start container"
          id="game_studio"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <center>
            <img
              src="images/it.png"
              alt="Picture of the author"
              height="90%"
              width="90%"
              className="md:hidden "
            />
          </center>

          <br />

          <div className="flex md:mt-10 md:w-11/12 xl:w-full text-white justify-start items-center ">
            <div className=" md:w-2/3 md:place-items-start md:block grid place-items-center lg:translate-x-10 xl:translate-x-0">
              <h1 className="text-3xl font-bold   md:mb-7 mb-6 md:text-left text-center">
                IT-SOLUTION
                <br /> SERVICES
              </h1>
              <p
                className={
                  "w-full lg:w-10/12 leading-8 md:mb-0   md:text-left text-center  "
                }
              >
                Information Technology (IT) department in a company provides IT
                solution services for clients. At Metaverseplus -IT Solution, we
                work to establish good networking and maintenance. We also can
                create specific effective business applications for our clients
                that will be a very beneficial tool for the growth of their
                business. Metaverseplus can provide Information Technology
                services in business through our skillful team to solute the
                clients requirements.
              </p>

              <Link href="/our-services">
                <div
                  className="border-1 border-white py-2 w-52 text-sm rounded-sm cursor-pointer button  button01 mt-10 "
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                >
                  <center>
                    <h6 className="font-bold">Our services</h6>
                  </center>
                </div>
              </Link>
            </div>
            <div className=" w-1/3    md:flex  justify-end sm:w-1/12 md:w-2/3">
              <img
                src="images/it.png"
                alt="Picture of the author"
                className=" lg:w-full xl:w-5/6 xl:-translate-x-24 lg:-translate-x-10 lg:-translate-y-10 xl:-translate-y-0   "
              />
            </div>
          </div>
        </div>

        <div
          className="mb-52  grid place-items-center sm:place-items-start container"
          id="game_studio"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <center>
            <img
              src="images/3.png"
              alt="Picture of the author"
              height="90%"
              width="90%"
              className="md:hidden"
            />
          </center>

          <br />

          <div className="flex md:mt-10 mt-5 md:w-11/12 xl:w-full text-white justify-start items-center ">
            <div className=" w-1/3    md:flex    justify-end sm:w-1/12 md:w-2/3">
              <img
                src="images/3.png"
                alt="Picture of the author"
                className=" lg:w-full xl:w-5/6 xl:-translate-x-24 lg:-translate-x-10 lg:-translate-y-10 xl:-translate-y-0   "
              />
            </div>
            <div className=" md:w-2/3 md:place-items-start md:block grid place-items-center lg:translate-x-10 xl:translate-x-0">
              <h1 className="text-3xl font-bold   md:mb-7 mb-6 md:text-left text-center">
                We are
                <br /> Game Studio
              </h1>
              <p
                className={
                  "w-full lg:w-10/12 leading-8 md:mb-0   md:text-left text-center  "
                }
              >
                We involve in multiple aspects of the gaming industry, including
                game development, content production, technology, distribution,
                and publishing. Our goal is to work with the best quality and
                efficiency. We believe that only the best people are able to
                create the best products and drive a company to success.
                Therefore, we consist of talented, creative, loyal, experienced,
                and hard-working members. We work together as one team of people
                with the expertise and determination to achieve our goals
                collectively. Our works involve highly talented and experienced
                game developers and up-to-date and advanced technologies. We
                make games we’d love to play.
              </p>

              <Link href="/our-services">
                <div
                  className="border-1 border-white py-2 w-52 text-sm rounded-sm cursor-pointer button  button01 mt-10 "
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                >
                  <center>
                    <h6 className="font-bold">Our services</h6>
                  </center>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="  grid place-items-center sm:place-items-start container "
          id="Subscribe"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div className="flex md:mt-10 md:w-11/12 xl:w-full text-white items-center ">
            <div className=" md:w-2/3 md:place-items-start md:block grid place-items-center ">
              <h1 className="text-3xl font-bold   md:mb-7 mb-6 ">
                How we bring you ?
              </h1>
              <p
                className={
                  "w-full lg:w-10/12 leading-8 md:mb-0  mb-10 md:text-left text-center"
                }
              >
                Metaverse is a quite expansive world that consists of long and
                difficult paths that require some brilliant and intuitive steps
                to pass. To be aware of our steps and plans, you can subscribe
                us and get a better look at our works to access this vast world.
              </p>
            </div>
            <div className=" w-1/3  items-center  md:block hidden   sm:w-1/12 md:w-2/3 md:gap-y-0 ml-10">
              {" "}
              <br /> <br /> <br />
              <div className="relative bg-transparent py-1.5 border-1 border-white border-opacity-30 w-80  flex items-center rounded-sm">
                <input
                  type="text"
                  placeholder="Type your email ..."
                  className="outline-none  pl-5 py-1.5 placeholder-white placeholder-opacity-40  text-airdropMainColor bg-transparent border-0 w-full border-transparent"
                  style={{ fontSize: "13px" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <button
                className={
                  "mt-2 bg-gradient-to-r from-purple-800 to-purple-900 py-2.5 w-80 justify-center rounded-sm cursor-pointer flex items-center " +
                  (isDisable && "opacity-40 cursor-not-allowed")
                }
                onClick={() => isDisable == false && sendEmail()}
              >
                <h4 className="text-sm mr-3">Subscribe</h4>
              </button>
            </div>
          </div>
          <br />
          <center className="md:hidden text-white  w-full">
            <div className=" items-center   grid  place-items-center md:gap-y-0">
              <div className="relative bg-transparent py-1.5 border-1 border-white border-opacity-30 w-80  flex items-center">
                <input
                  type="text"
                  placeholder="Type your email ..."
                  className="outline-none pl-5 py-1.5 placeholder-white placeholder-opacity-40  text-airdropMainColor bg-transparent border-0 w-full border-transparent rounded-sm"
                  style={{ fontSize: "13px" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <button
                className={
                  " bg-gradient-to-r from-purple-800 to-purple-900 py-2.5 px-32 rounded-sm cursor-pointer flex items-cente " +
                  (isDisable && "opacity-40 cursor-not-allowed")
                }
                onClick={() => isDisable == false && sendEmail()}
              >
                <h4 className="text-sm mr-3">Subscribe</h4>
              </button>
            </div>
          </center>
        </div>
      </div>
    </Layout>
  );
}
