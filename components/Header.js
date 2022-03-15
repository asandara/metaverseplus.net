import Link from "next/link";
import AOS from "aos";
import { useRef, useState, useEffect } from "react";
import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Modal from "react-modal";
import { useSnackbar } from "notistack";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "30%",
    minWidth: "350px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#001128",
    borderColor: "#00000000",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#rooot");

const Header = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isDisable, setisDisable] = useState(false);
  const [email, setEmail] = useState("");
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [targetElement, settargetElement] = React.useState("");
  function openModal() {
    setIsOpen(true);
  }

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const errorMessage = (message, isError) => {
    if (isError == true) {
      enqueueSnackbar(message, {
        variant: "error",
      });
    }
    if (isError == false) {
      enqueueSnackbar(message, {
        variant: "success",
      });
    }
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
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
            setIsOpen(false);
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
  function closeModal() {
    setIsOpen(false);
  }
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNavbarOpen(false);
      enableBodyScroll(targetElement);
    }
  };
  useEffect(() => {
    settargetElement(document.querySelector("#rooot"));
    window.addEventListener("resize", handleResize);
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div
      className={
        "relative " + (navbarOpen && "navbar-expander navbar-collapse")
      }
    >
      <div
        className={
          " text-white xl:gap-x-10 md:gap-x-10 lg:gap-x-6 text-lg md:flex hidden " +
          (navbarOpen ? "hidden" : " ")
        }
      >
        <Link href="/">
          <h6
            className="cursor-pointer hidden md:inline lg:hidden "
            style={{ fontSize: "17px" }}
            onClick={() => setNavbarOpen(false)}
          >
            Home
          </h6>
        </Link>
        <Link href="/about">
          <h6
            className="cursor-pointer "
            style={{ fontSize: "17px" }}
            onClick={() => setNavbarOpen(false)}
          >
            About us
          </h6>
        </Link>
        <Link href="/our-services">
          <h6 className="cursor-pointer" style={{ fontSize: "17px" }}>
            Our services
          </h6>
        </Link>

        <Link href="./#contact-us">
          <h6 className="cursor-pointer" style={{ fontSize: "17px" }}>
            Contact us
          </h6>
        </Link>
        <button
          onClick={openModal}
          className="bg-gradient-to-r from-purple-800 to-purple-900 py-2 px-12 rounded-sm cursor-pointer flex items-center"
        >
          <h4 className="text-sm mr-3">Subscribe</h4>
        </button>
      </div>
      <div
        className={
          " text-white gap-x-10 text-lg md:hidden flex  justify-between w-full " +
          (navbarOpen ? "hidden" : " ")
        }
      >
        {" "}
        <div
          onClick={() => {
            setNavbarOpen(!navbarOpen);
            disableBodyScroll(targetElement);
          }}
        >
          <svg
            className={"w-9 h-9  lg:hidden  cursor-pointer font-bold "}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokewidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <button
          onClick={openModal}
          className="bg-gradient-to-r from-purple-800 to-purple-900 py-1.5 px-9 rounded-sm cursor-pointer flex  items-center"
        >
          <h4 className="text-sm mr-3">Subscribe</h4>
        </button>{" "}
      </div>

      <div
        className={
          "bg-primary backdrop-blur-sm bg-opacity-90 w-full  mobile_nav collapse-open nav_animi " +
          (navbarOpen ? "" : "hidden ")
        }
      >
        <button
          type="button"
          onClick={() => {
            setNavbarOpen(!navbarOpen);
            enableBodyScroll(targetElement);
          }}
        >
          <svg
            className="w-6 h-6 text-white font-bold mx-5 my-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div>
          <center>
            <div className="grid gap-y-14 place-items-center overflow-scroll no-scrollbar">
              <Link href="/">
                <h6
                  className="cursor-pointer"
                  onClick={() => {
                    setNavbarOpen(false);
                    enableBodyScroll(targetElement);
                  }}
                >
                  Home
                </h6>
              </Link>
              <Link href="/about">
                <h6
                  className="cursor-pointer"
                  onClick={() => {
                    setNavbarOpen(false);
                    enableBodyScroll(targetElement);
                  }}
                >
                  About us
                </h6>
              </Link>
              <Link href="/our-services">
                <h6
                  className="cursor-pointer"
                  onClick={() => {
                    setNavbarOpen(false);
                    enableBodyScroll(targetElement);
                  }}
                >
                  Our services
                </h6>
              </Link>

              <Link href="#contact-us">
                <h6
                  className="cursor-pointer"
                  onClick={() => {
                    setNavbarOpen(false);
                    enableBodyScroll(targetElement);
                  }}
                >
                  Contact us
                </h6>
              </Link>
            </div>
          </center>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <div className="">
          <button onClick={closeModal}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="w-full grid place-items-center py-4">
            <div className="w-3/4 ">
              <div className="relative bg-transparent py-1.5 border-b-1 border-white border-opacity-40 w-full  flex items-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="text-white py-1 placeholder-airdropMainColor placeholder-opacity-40  text-airdropMainColor bg-transparent border-0 w-full border-transparent outline-none"
                  style={{ fontSize: "14px" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="h-6"></div>
              <button
                className={
                  "text-white text-sm w-full bg-gradient-to-r from-purple-800 to-purple-900 py-2 px-7 rounded-sm cursor-pointer " +
                  (isDisable && "opacity-40 cursor-not-allowed")
                }
                onClick={() => isDisable == false && sendEmail()}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
