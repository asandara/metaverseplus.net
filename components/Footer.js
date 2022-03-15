import Link from "next/link";
import AOS from "aos";
import { useRef, useState, useEffect } from "react";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      className="footer_bg relative w-full h-98 sm:h-80"
      style={{ height: "400px" }}
      id="contact-us"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="500"
    >
      {" "}
      <div className="mb-9 hidden sm:block justify-center absolute bottom-40 left-1/2 transform -translate-x-44 sm:-translate-y-1/2 -translate-y-9">
        <Link href="/">
                    <img src="../logo.svg"/>
        </Link>
      </div>
      <div className="mx-auto px-5 sm:px-0  w-full text-white sm:flex sm:gap-y-0  justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:-translate-y-1/2 -translate-y-9">
        <div className="mb-9 sm:hidden">
          <Link href="/">
                              <img src="../logo.svg" width="300px"/>
          </Link>
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
          <Link href="#contact-us">
            <h6 className="cursor-pointer font-bold">Contact us</h6>
          </Link>
        </div>
        <div className="text-left mt-10 sm:mt-0">
          <h1 className="font-bold">Headquater :</h1>{" "}
          <div className="h-1"></div>
          <h1 className="text-sm">
            Ompus Tower- Al A'amal St - Business Bay<br/> Dubai - United Arab
            Emirates
          </h1>
          <div className="h-4"></div>
          <div className="flex  space-x-5">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 39 39"
                className="cursor-pointer  w-9 h-9  "
              >
                <g
                  id="Group_27"
                  data-name="Group 27"
                  transform="translate(-0.385)"
                >
                  <circle
                    id="Ellipse_12"
                    data-name="Ellipse 12"
                    cx="19.5"
                    cy="19.5"
                    r="19.5"
                    transform="translate(0.385)"
                    fill="#fff"
                  />
                  <g
                    id="Group_10"
                    data-name="Group 10"
                    transform="translate(10.359 11.966)"
                  >
                    <g
                      id="Group_9"
                      data-name="Group 9"
                      transform="translate(0)"
                    >
                      <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M1012.793,257.733a10.281,10.281,0,0,0,10.352-10.352q0-.236-.01-.47a7.4,7.4,0,0,0,1.815-1.884,7.254,7.254,0,0,1-2.089.573,3.652,3.652,0,0,0,1.6-2.013,7.293,7.293,0,0,1-2.31.883,3.641,3.641,0,0,0-6.2,3.318,10.329,10.329,0,0,1-7.5-3.8,3.641,3.641,0,0,0,1.126,4.857,3.614,3.614,0,0,1-1.648-.455c0,.015,0,.03,0,.046a3.64,3.64,0,0,0,2.919,3.567,3.635,3.635,0,0,1-1.643.062,3.642,3.642,0,0,0,3.4,2.527,7.3,7.3,0,0,1-4.519,1.557,7.394,7.394,0,0,1-.868-.05,10.3,10.3,0,0,0,5.577,1.634"
                        transform="translate(-1007.216 -243.321)"
                        fill="#0c1219"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="39"
                viewBox="0 0 37 39"
                className="cursor-pointer w-9 h-9"
              >
                <g
                  id="Group_26"
                  data-name="Group 26"
                  transform="translate(-0.385)"
                >
                  <ellipse
                    id="Ellipse_13"
                    data-name="Ellipse 13"
                    cx="18.5"
                    cy="19.5"
                    rx="18.5"
                    ry="19.5"
                    transform="translate(0.385)"
                    fill="#fff"
                  />
                  <g
                    id="Group_12"
                    data-name="Group 12"
                    transform="translate(12.989 9.586)"
                  >
                    <g
                      id="Group_11"
                      data-name="Group 11"
                      transform="translate(0 0)"
                    >
                      <g id="logo">
                        <path
                          id="Path_28"
                          data-name="Path 28"
                          d="M314.916,106.758l.526-3.43h-3.29V101.1a1.714,1.714,0,0,1,1.933-1.853h1.5v-2.92a18.231,18.231,0,0,0-2.656-.232c-2.71,0-4.481,1.643-4.481,4.616v2.614h-3.012v3.43h3.012v8.29h3.708v-8.29Z"
                          transform="translate(-305.432 -96.099)"
                          fill="#0c1219"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="39"
                viewBox="0 0 38 39"
                className="cursor-pointer w-9 h-9"
              >
                <g
                  id="Group_31"
                  data-name="Group 31"
                  transform="translate(-0.385)"
                >
                  <ellipse
                    id="Ellipse_15"
                    data-name="Ellipse 15"
                    cx="19"
                    cy="19.5"
                    rx="19"
                    ry="19.5"
                    transform="translate(0.385)"
                    fill="#fff"
                  />
                  <g
                    id="Group_22"
                    data-name="Group 22"
                    transform="translate(10.292 11.798)"
                  >
                    <g
                      id="Group_21"
                      data-name="Group 21"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_8"
                        data-name="Path 8"
                        d="M1710.527,764.154l1.932,5.348s.241.5.5.5,4.106-4,4.106-4l4.279-8.264-10.749,5.038Z"
                        transform="translate(-1706.235 -755.882)"
                        fill="#222"
                      />
                      <path
                        id="Path_9"
                        data-name="Path 9"
                        d="M1719.958,790.02l-.371,3.942s-.155,1.208,1.052,0,2.364-2.139,2.364-2.139Z"
                        transform="translate(-1713.105 -780.376)"
                        fill="#474747"
                      />
                      <g id="Group_20" data-name="Group 20">
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M1697.067,758.516l-3.975-1.3s-.475-.193-.322-.63c.031-.09.095-.167.285-.3.881-.614,16.3-6.156,16.3-6.156a1.316,1.316,0,0,1,.692-.049.374.374,0,0,1,.256.279,1.284,1.284,0,0,1,.035.351c0,.1-.014.2-.023.345-.094,1.515-2.9,12.825-2.9,12.825s-.168.662-.771.684a1.1,1.1,0,0,1-.8-.31c-1.182-1.017-5.269-3.763-6.172-4.367a.171.171,0,0,1-.074-.121c-.013-.064.056-.143.056-.143s7.116-6.325,7.305-6.989c.014-.051-.041-.077-.115-.055-.473.174-8.665,5.347-9.569,5.918A.436.436,0,0,1,1697.067,758.516Z"
                          transform="translate(-1692.74 -750.053)"
                          fill="#0c1219"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="39"
                viewBox="0 0 38 39"
                className="cursor-pointer w-9 h-9"
              >
                <g
                  id="Group_25"
                  data-name="Group 25"
                  transform="translate(-0.385)"
                >
                  <ellipse
                    id="Ellipse_17"
                    data-name="Ellipse 17"
                    cx="19"
                    cy="19.5"
                    rx="19"
                    ry="19.5"
                    transform="translate(0.385)"
                    fill="#fff"
                  />
                  <g
                    id="Group_16"
                    data-name="Group 16"
                    transform="translate(8.604 8.849)"
                  >
                    <g
                      id="Group_15"
                      data-name="Group 15"
                      transform="translate(0 0)"
                    >
                      <g id="Group_14" data-name="Group 14">
                        <path
                          id="Path_3"
                          data-name="Path 3"
                          d="M1677.3,386c2.709,0,3.03.01,4.1.059a5.613,5.613,0,0,1,1.884.349,3.36,3.36,0,0,1,1.926,1.926,5.62,5.62,0,0,1,.349,1.884c.049,1.07.059,1.391.059,4.1s-.01,3.03-.059,4.1a5.62,5.62,0,0,1-.349,1.884,3.361,3.361,0,0,1-1.926,1.926,5.613,5.613,0,0,1-1.884.349c-1.07.049-1.391.059-4.1.059s-3.031-.011-4.1-.059a5.615,5.615,0,0,1-1.884-.349,3.361,3.361,0,0,1-1.926-1.926,5.615,5.615,0,0,1-.35-1.884c-.049-1.07-.059-1.391-.059-4.1s.01-3.03.059-4.1a5.615,5.615,0,0,1,.35-1.884,3.36,3.36,0,0,1,1.926-1.926,5.615,5.615,0,0,1,1.884-.349c1.07-.049,1.391-.059,4.1-.059m0-1.828c-2.756,0-3.1.012-4.184.061a7.448,7.448,0,0,0-2.463.471,5.188,5.188,0,0,0-2.968,2.968,7.447,7.447,0,0,0-.472,2.463c-.049,1.082-.061,1.428-.061,4.183s.012,3.1.061,4.184a7.443,7.443,0,0,0,.472,2.463,5.188,5.188,0,0,0,2.968,2.968,7.445,7.445,0,0,0,2.463.472c1.082.049,1.428.061,4.184.061s3.1-.012,4.184-.061a7.447,7.447,0,0,0,2.463-.472,5.188,5.188,0,0,0,2.968-2.968,7.443,7.443,0,0,0,.472-2.463c.049-1.082.061-1.428.061-4.184s-.012-3.1-.061-4.183a7.447,7.447,0,0,0-.472-2.463,5.188,5.188,0,0,0-2.968-2.968,7.449,7.449,0,0,0-2.463-.471c-1.082-.049-1.428-.061-4.184-.061Z"
                          transform="translate(-1667.149 -384.173)"
                          fill="#0c1219"
                        />
                        <path
                          id="Path_4"
                          data-name="Path 4"
                          d="M1693.036,404.849a5.211,5.211,0,1,0,5.211,5.211A5.211,5.211,0,0,0,1693.036,404.849Zm0,8.593a3.382,3.382,0,1,1,3.382-3.382A3.383,3.383,0,0,1,1693.036,413.442Z"
                          transform="translate(-1682.888 -399.913)"
                          fill="#0c1219"
                        />
                        <circle
                          id="Ellipse_14"
                          data-name="Ellipse 14"
                          cx="1.218"
                          cy="1.218"
                          r="1.218"
                          transform="translate(14.346 3.513)"
                          fill="#0c1219"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
