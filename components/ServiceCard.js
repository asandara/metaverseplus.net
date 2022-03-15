import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ServiceCard = ({ props }) => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="transform transition duration-500 hover:scale-105 text-left">
      <div
        data-aos="fade-zoom-in"
        data-aos-duration="500"
        data-aos-offset="0"
        data-aos-easing="ease-in-sine"
      >
        {props.svg}
        <div className="h-3"></div>
        <h1 className="mb-2 font-bold">{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
