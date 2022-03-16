import Link from "next/link";
import AOS from "aos";
import { useRef, useState, useEffect } from "react";
import "aos/dist/aos.css";
import React from "react";
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
const customStyles2 = {
  content: {
    padding: "0px",
    top: "50%",
    border: "none",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "30%",
    minWidth: "350px",
    borderRadius: "10px",
    marginRight: "-50%",
    backgroundColor: "transparent",
    transform: "translate(-50%, -50%)",
  },
};

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

  // nashwan.........................................................
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  let [currentLenghtNow, setCurrentLenghtNow] = React.useState(0);
  let [emailContact, setEmailContact] = React.useState("");
  let [messageContact, setMessageContact] = React.useState("");
  function is_Empty(x) {
    return (
      typeof x == "undefined" ||
      x == null ||
      x == false ||
      x.length == 0 ||
      x == 0 ||
      x == "" ||
      x.replace(/\s/g, "") == "" ||
      !/[^\s]/.test(x) ||
      /^\s*$/.test(x)
    );
  }
  function is_Email(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  async function contact() {
    if (is_Empty(emailContact) || is_Empty(messageContact)) {
      errorMessage("Please fill all fields", true);
      return;
    }
    if (is_Email(emailContact) == false) {
      errorMessage("Please enter a valid email", true);
      return;
    }
    const res = await fetch(window.location.origin + "/api/contact", {
      body: JSON.stringify({
        email: emailContact,
        message: messageContact,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    errorMessage("Thank you for your request !", false);
    setIsOpen2(false);
    setEmailContact(null);
    setMessageContact(null);
  }
  // end nashwan.........................................................
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

        <h6
          onClick={() => setIsOpen2(true)}
          className="cursor-pointer"
          style={{ fontSize: "17px" }}
        >
          Contact us
        </h6>
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
              <h6
                className="cursor-pointer"
                onClick={() => {
                  setNavbarOpen(false);
                  enableBodyScroll(targetElement);
                  setIsOpen2(true);
                }}
              >
                Contact us
              </h6>
            </div>
          </center>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen2}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          setIsOpen2(false);
        }}
        style={customStyles2}
        contentLabel="Contact"
        overlayClassName="Overlay"
      >
        <div className="relative">
          <img
            src="contact.png"
            className="w-full h-98 md:h-full"
            style={{
              objectFit: "cover",
            }}
          />
          <button
            onClick={() => setIsOpen2(false)}
            className="absolute cursor-pointer top-0 right-0 m-3 z-10"
          >
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
          <div className="fixed top-0 flex items-center h-full w-full p-10">
            <div className="w-full">
              <p className="text-white mt-20 md:mt-0 text-2xl font-extrabold">
                Contact us
              </p>
              <p className="text-white my-5">
                Your messages create new news for us
              </p>

              <input
                type="email"
                id="email"
                placeholder="Your Email"
                onChange={(e) => setEmailContact(e.target.value)}
                className="w-full p-4 border-b-2 border-white bg-transparent text-white outline-none"
              />
              <div className="flex items-center border-b-2 my-10 border-white ">
                <input
                  id="message"
                  onChange={(e) => {
                    setCurrentLenghtNow(e.target.value.length);
                    setMessageContact(e.target.value);
                  }}
                  type="text"
                  placeholder="Your message"
                  className="w-full p-4 bg-transparent outline-none text-white"
                  maxLength={255}
                />
                <span className="text-zinc-400">{255 - currentLenghtNow}</span>
              </div>
              <button
                onClick={() => {
                  contact();
                }}
                className="p-4 mt-4 md:mt-20 outline-none text-white bg-purple-600 w-full"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </Modal>

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
