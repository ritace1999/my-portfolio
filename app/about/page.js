"use client";

import { useEffect, useState } from "react";
import HomeLayout from "@/components/home/HomeLayout";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { images } from "@/constants";
import Link from "next/link";
import styles from "../Home.module.css"; // Import CSS module for local styling

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoaded(true);
    }, 1); // Adjust the delay as needed
  }, []);

  return (
    <>
      <HomeLayout>
        <div className="flex w-full h-full">
          <div
            className={`my-auto mx-16 h-[380px]  w-[380px] rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer ${
              loaded ? styles.fadeIn : styles.hidden
            }`}
          >
            <Image
              src={images.AboutAvatar}
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
              Education
            </h1>
            <div>
              <p className="text-4xl font-bold text-white">
                BSc (Hons) Computer Science
              </p>
              <p className="text-white text-justify text-xl">
                Herald College Kathmandu (University of Wolverhampton)
              </p>
              <p className="text-white text-justify text-xl">
                Second Class(1st Division){" "}
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">
                Samata Shikshya Niketan
              </p>
              <p className="text-white text-justify text-xl">
                Higher Secondary Education(HSE) <br />
                GPA: 2.52 | 2018-2019
              </p>

              <p className="text-white text-justify text-xl">
                Secondary Education Examination(SEE) <br /> GPA: 2.95 | 2017
              </p>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
