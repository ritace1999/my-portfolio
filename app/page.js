"use client";

import { useEffect, useState } from "react";
import HomeLayout from "@/components/home/HomeLayout";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { images } from "@/constants";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  const [cvDownloaded, setCvDownloaded] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "RESUME.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCvDownloaded(true);
  };

  return (
    <HomeLayout className="h-[80vh]">
      <div className="flex w-full h-full">
        <div
          className={`my-auto mx-16 h-[380px] w-[380px] rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer ${
            loaded ? styles.fadeIn : styles.hidden
          }`}
        >
          <Image
            src={images.HeroImage}
            alt="HeroImage"
            className="object-cover  w-full h-full rounded-full"
          />
        </div>
        <div
          className={`flex flex-col my-auto w-[60%] gap-y-2 ${
            loaded ? styles.fadeIn : styles.hidden
          }`}
        >
          <h1 className="text-5xl font-extrabold text-[#a6e4e7]">
            Ritesh Adhikari
          </h1>
          <p className="text-4xl font-bold text-white">
            I am a{" "}
            <TypeAnimation
              sequence={[
                "Front-end Developer",
                1000,
                "Back-end Developer",
                1000,
              ]}
              speed={10}
              style={{ fontSize: "1em", color: "#f8f398" }}
              repeat={Infinity}
            />
          </p>
          <p className="text-white text- text-lg">
            I am a passionate Full-stack Developer skilled in frontend
            technologies like HTML, CSS, JavaScript, and React.js, as well as
            backend technologies such as Node.js, Express.js, and MongoDB. I
            thrive on challenges, continuously learning to deliver high-quality
            solutions. With attention to detail and a drive for innovation, I
            create engaging digital experiences.
          </p>
          <div
            onClick={handleResumeDownload}
            className={`flex gap-8 mt-10 ${
              loaded ? styles.fadeIn : styles.hidden
            }`}
          >
            <Link
              href={""}
              download
              className={`flex gap-1 justify-center items-center px-3 py-3 font-semibold group relative overflow-hidden hover:text-white bg-white bg-opacity-20 backdrop-blur-md rounded-lg `}
            >
              <span className="text-xl">Download Cv</span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
            </Link>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
