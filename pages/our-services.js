import Link from "next/link";
import Footer from "../components/Footer";
import React from "react";
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import Layout from "../components/layouts";
import { useRef, useState, useEffect } from "react";

const OurServices = () => {
  const [activeStatus, setActiveStatus] = useState(1);
  const [activeStatus2, setActiveStatus2] = useState(1);

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
          <img
            src="/images/our_services.png"
            className="w-full h-98 md:h-auto object-cover"
          />

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



        <div className=" flex w-11/12 justify-start items-start md:overflow-x-hidden  overflow-x-auto space-x-5  scroll-smooth" >
          <div>

            <div className="mb-10 mt-2 flex items-center justify-start">
            <div className="bg-white w-1 h-8 mr-4">

            </div>

          <h1 className="font-bold text-white text-left text-xl">
          Metaverse World Services
            </h1>
           </div>
            <div className="shadow rounded ">

              <ul className="flex  md:ml-14">
                <li
                  onClick={() => setActiveStatus(1)}
                  إ
                  className={
                    activeStatus == 1
                      ? "items-start border-b-1 border-custom_purple transform transition duration-500  pt-3 rounded-t text-custom_purple  px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
                      : " text-white transform transition duration-500 border-b-1 border-custom_purple border-opacity-30 pt-3    hover:text-custom_purple px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 cursor-pointer"
                  }
                >
                  <div className="flex w-full items-start mb-3">
                    <span></span>
                    <span className="text-lg font-bold ">
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
                    <span className=" font-bold text-lg">
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
                    <span className=" font-bold text-lg">
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



        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:w-10/12 w-11/12 xl:gap-x-32 lg:gap-x-20 md:gap-x-8  gap-y-20 ">
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



       <br/><br/><br/><br/>


      <center className="container h-full">
        <div
          className="w-full overflow-hidden relative"
        >
           <div className=" flex w-11/12 justify-start items-start md:overflow-x-hidden  overflow-x-auto space-x-5  scroll-smooth" >
          <div>

          <div className="mb-10 mt-2 flex items-center justify-start">
            <div className="bg-white w-1 h-8 mr-4">

            </div>

          <h1 className="font-bold text-white text-left text-xl">
          Digital marketing & IT-Solution
            </h1>
           </div>



            <div className="shadow rounded">

              <ul className="flex   md:px-5 md:ml-10">
                <li
                  onClick={() => setActiveStatus2(1)}
                  إ
                  className={
                    activeStatus2 == 1
                      ? "border-b-1 border-custom_purple transform transition duration-500  pt-3 rounded-t text-custom_purple  px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
                      : " text-white transform transition duration-500 border-b-1 border-custom_purple border-opacity-30 pt-3    hover:text-custom_purple px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 cursor-pointer"
                  }
                >
                  <div className="flex items-center mb-3">
                    <span></span>
                    <span className=" font-bold text-lg w-full">
                      {activeStatus2 == 1 ? "Digital marketing" : "Digital marketing"}
                    </span>
                  </div>
                </li>


                <li
                  onClick={() => setActiveStatus2(2)}
                  className={
                    activeStatus2 == 2
                      ? "border-b-1 transform transition duration-500 border-custom_purple   pt-3 rounded-t text-custom_purple px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
                      : " text-white transform transition duration-500  border-b-1 border-custom_purple border-opacity-30 pt-3    hover:text-custom_purple px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 cursor-pointer"
                  }
                >
                  <div className="flex items-center mb-3">
                    <span></span>
                    <span className=" font-bold text-lg">
                      {activeStatus2 == 2 ? "IT-Solution" : "IT-Solution"}
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
             {activeStatus2 == 1 && (
            <>

              <ServiceCard
                props={{
                  svg: <img src="./images/socialmedia.png" />,
                  title: "Social Media Marketing (SMM)",
                  desc: `SMM is marketing that targets social media platforms like Facebook, Instagram, TikTok, Twitter ,Youtube for brand promotion,
                         target audience growth, driving website traffic, and increasing sales.
                        \nWhat is benefits of Social Media Marketing?\nIncrease brand awareness and Faster and easier content distribution.
                        \nWhat is Social Media Security?
                        As organizations increasingly rely on social media to grow their brands, attackers leverage the inherent trust and public nature of these platforms to conduct attacks. Protecting brands, executives, employees, and consumers on social media is critical for modern business success.`,
                }}
              />
              
           
              
               <ServiceCard
                props={{
                  svg: <img src="./images/video.png" />,
                  title: "Video production",
                  desc: `Video marketing can be an important part of your digital marketing strategy, giving a face and voice to your business and providing high SEO value for your website. Including video on a landing page can increase conversion by 80%, and including video in an email has been shown to increase click-through rates 200–300%.
                         \nOur video production services include:
                         (Video marketing strategy, Scriptwriting and editing, Professional video and lighting equipment, Video editing, 3D and 2D graphics, Motion graphics, Color correction, Video hosting, Video distribution)`,
                }}
              />

               <ServiceCard
                props={{
                  svg: <img src="./images/2d3d.png" />,
                  title: "2D and 3D animations",
                  desc: `Animation refers to the process of planning, designing, drawing and formulating photographic sequences that are integrated into videos and gaming. In simple terms, it is the rapid screening of images to create a scene. It makes use of static images to give an illusion of movement.
                        \nWhat is 2D and 3D animations?
                        2D animation is also known as traditional animation and refers to the process of creating motion in a two-dimensional space.
                        3D animation involves animating characters and objects in a three-dimensional space. Characters and objects in this form of animation have volume, depth and can be rotated and moved.`,
                }}
              />  

            <ServiceCard
                props={{
                  svg: <img src="./images/searchengine.png" />,
                  title: "Search Engine Optimization (SEO)",
                  desc: `SEO stands for “search engine optimization.” In simple terms, it means the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.`,
                }}
              />

             <ServiceCard
                props={{
                  svg: <img src="./images/360camping.png" />,
                  title: "360 marketing campaign",
                  desc: `A 360 marketing strategy is a comprehensive plan that focuses on reaching the target audience from multiple platforms and channels. This type of strategy generally combines both traditional marketing and digital marketing channels as it infuses within the entire customer journey.`,
                }}
              />

            <ServiceCard
                props={{
                  svg: <img src="./images/influencer.png" />,
                  title: "Influencer Marketing",
                  desc: `nfluencer Marketing is a form of marketing in which places focus on influential people rather than the target market as a whole.
                        It identifies the individuals that influence potential buyers and orients marketing activities around these influencers.
                        Influencer marketing is more about showing consumers your authority, credibility, and thought-leadership within your industry.
                        `,
                }}
              />


          <ServiceCard
                props={{
                  svg: <img src="./images/audio.png" />,
                  title: "Audio Marketing",
                  desc: `Audio marketing helps brands extend campaign messaging beyond the screen. Audio marketing includes a broad spectrum of content, including jingles, scores, and branded content. It also includes audio ads.`,
                }}
              />
            </>
          )}




{activeStatus2 == 2 && (
            <>

              <ServiceCard
                props={{
                  svg: <img src="./images/customDev.png" />,
                  title: "Customized software development",
                  desc: `Custom software development is the process of designing, creating, deploying and maintaining software for a specific set of users, functions or organizations. In contrast to commercial off-the-shelf software (COTS), custom software development aims at a narrowly defined set of requirements. COTS targets a broad set of requirements, allowing it to be packaged and commercially marketed and distributed.
                        \nCustom software development is usually performed by in-house development teams or outsourced to a third-party. 
                        The same processes and methodologies apply to custom software development as other types of software development.`,
                }}
              />
              
           
              
               <ServiceCard
                props={{
                  svg: <img src="./images/maintenance.png" />,
                  title: "Maintenance, Repier & Upgrade Services",
                  desc: `At some point (after a great deal of planning and even more hard work), the new computer technology will be up and running-the prospect of which sounds good, but can be anticlimactic. Is life in the organization perfect now? Probably not. Is it better than it was before? Probably so. But for this to be true, the technology has to be used, maintained, and supported properly. This includes all equipment, software, and network connections. Moreover, ongoing training and support must be provided to all user groups. Once these activities have been instituted, it is more likely there will be a dramatic difference in the way the organization operates.`,
                }}
              />

               <ServiceCard
                props={{
                  svg: <img src="./images/cloud.png" />,
                  title: "Cloud Solutions",
                  desc: `Cloud solutions, also known as cloud computing or cloud services, deliver IT resources on demand over the Internet. Cloud service providers such Amazon Web Services, Microsoft Azure and Google Cloud Platform can deliver everything from applications to data centers on a pay-for-use basis to their subscribers. With cloud solutions, IT resources can scale up or down quickly to meet business demands. Cloud solutions enable rapid access to flexible and low-cost IT resources without large upfront investments in hardware or time-consuming installation and maintenance. Businesses can provision exactly the type and size of computing resources they need to power a new initiative or operate their IT departments more efficiently.`,
                }}
              />  

            <ServiceCard
                props={{
                  svg: <img src="./images/webdev.png" />,
                  title: "Web/Application Development",
                  desc: `A web application is a PC program that enables you to sign in to a web address so as to submit and recover information to/from a database over the web, these projects are created utilizing web advancements, for example, HTML, CSS, JS and so on and can be gotten to utilizing your favoured internet browser
                         \nWhat is our technology used?
                         (React,Next,tailwindCSS,NodeJS,Laravel)`,
                }}
              />

             <ServiceCard
                props={{
                  svg: <img src="./images/mobile.png" />,
                  title: "Mobile Application",
                  desc: `Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices.
                         Like web application development, mobile application development has its roots in more traditional software development.
                         \nWhat is our technology used?
                         (React native,Flutter,NodeJS,Laravel)`,
                }}
              />

            </>
          )}
          </div>

        </div>
      </center>
    </Layout>
  );
};

export default OurServices;
