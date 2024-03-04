"use client";

import { useEffect, useState } from "react";
import HomeLayout from "@/components/home/HomeLayout";
import Image from "next/image";
import { images } from "@/constants";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md"; // Import icons
import styles from "../Home.module.css";

export default function ContactPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, []);

  return (
    <HomeLayout>
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
          className={`flex flex-col ml-24 my-[130px] w-[60%] gap-y-2 ${
            loaded ? styles.fadeIn : styles.hidden
          }`}
        >
          <h1 className="text-5xl font-extrabold text-[#a6e4e7]">Contact</h1>

          {/* Location */}
          <div className="flex items-center text-3xl text-white">
            <MdLocationOn className=" mr-2 " />
            <p>Budhanilkantha-11, Kapan, Kathmandu,Nepal</p>
          </div>

          {/* Email */}
          <div className="flex items-center text-3xl text-white">
            <MdEmail className=" mr-2" />
            <p>0314ritesh@gmail.com</p>
          </div>

          {/* Phone Number */}
          <div className="flex items-center text-3xl text-white">
            <MdPhone className=" mr-2 " />
            <p>+977 9810345303</p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
