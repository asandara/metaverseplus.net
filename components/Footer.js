import Link from "next/link";
import AOS from "aos";
import { useRef, useState, useEffect } from "react";
import SocialIcon from "./socialIcon";
import "aos/dist/aos.css";
const Footer = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      className="footer_bg relative w-full h-98 sm:h-80"
      style={{ height: "447px" }}
      id="contact-us"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="500"
    >
      {" "}
      <div className="mb-9 hidden sm:block justify-center absolute bottom-40 left-1/2 transform -translate-x-44 sm:-translate-y-1/2 -translate-y-9">
        <Link href="/">
          <img src="../logo.svg" />
        </Link>
        <SocialIcon />
      </div>
      <div className="mx-auto px-5 sm:px-0  w-full text-white sm:flex sm:gap-y-0  justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:-translate-y-1/2 -translate-y-9">
        <div className="mb-9 sm:hidden">
          <Link href="/">
            <img src="../logo.svg" width="300px" />
          </Link>
          <SocialIcon />
        </div>
        <div className="text-left sm:mr-20 mr-10 xl:mr-24 sm:mb-0 mb-6">
          <Link href="/about">
            <h6 className="cursor-pointer font-bold">About us</h6>
          </Link>{" "}
          <div className="h-5"></div>
          <Link href="/our-services">
            <h6 className="cursor-pointer font-bold">Our services</h6>
          </Link>
          <div className="h-5"></div>
          <h6 onClick={props.setIsOpen2} className="cursor-pointer font-bold">
            Contact us
          </h6>
        </div>
        <div className="text-left mt-10 sm:mt-0">
          <h1 className="font-bold">Headquater :</h1>{" "}
          <div className="h-1"></div>
          <h1 className="text-sm">
            Ompus Tower- Al A'amal St - Business Bay
            <br /> Dubai - United Arab Emirates
          </h1>
          <div className="h-5"></div>
          <Link href={"tel:+9710501925188"}>
            <div className="flex gap-2 content-center  center-center	 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <span className="-translate-y-1">- 050 1925188</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
