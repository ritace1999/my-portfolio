"use client";

import { useEffect, useState } from "react";
import HomeLayout from "@/components/home/HomeLayout";
import styles from "../Home.module.css";
import Image from "next/image";
import { images } from "@/constants";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, []);

  return (
    <>
      <HomeLayout className="h-[80vh]">
        <div className="flex w-full h-full overflow-y-auto">
          <div
            className={`flex flex-col m-10 w-full h-full gap-y-2 ${
              loaded ? styles.fadeIn : styles.hidden
            }`}
          >
            <h1 className="text-5xl font-extrabold text-[#a6e4e7]">Skills</h1>
            <div className="my-4">
              <p className="text-4xl font-bold text-white">Frontend:</p>
              <div className="bg-slate-200 w-[100%] h-32 flex items-center px-10  gap-10 rounded-lg my-5 backdrop-filter backdrop-blur-lg bg-opacity-30">
                <span
                  className={`flex flex-col items-center justify-center w-24 text-white font-bold ${
                    loaded ? styles.fadeIn : styles.hidden
                  }`}
                >
                  <Image
                    src={images.JS}
                    alt={""}
                    className={`animate-scale ${
                      loaded ? styles.fadeIn : styles.hidden
                    }`}
                  />
                  <p>JavaScript</p>
                </span>
                <span
                  className={`flex flex-col items-center justify-center w-24 text-white font-bold ${
                    loaded ? styles.fadeIn : styles.hidden
                  }`}
                >
                  <Image
                    src={images.ReactJs}
                    alt={""}
                    className={`animate-scale ${
                      loaded ? styles.fadeIn : styles.hidden
                    }`}
                  />
                  <p>React Js</p>
                </span>
                <span
                  className={`flex flex-col items-center justify-center w-24 text-white font-bold ${
                    loaded ? styles.fadeIn : styles.hidden
                  }`}
                >
                  <Image
                    src={images.NextJs}
                    alt={""}
                    className={`bg-white rounded-lg p-3 animate-scale ${
                      loaded ? styles.fadeIn : styles.hidden
                    }`}
                  />
                  <p>Next Js</p>
                </span>
                <span
                  className={`flex flex-col items-center justify-center w-24 text-white font-bold ${
                    loaded ? styles.fadeIn : styles.hidden
                  }`}
                >
                  <Image
                    src={images.HTML}
                    alt={""}
                    className={`animate-scale ${
                      loaded ? styles.fadeIn : styles.hidden
                    }`}
                  />
                  <p>HTML</p>
                </span>
                <span
                  className={`flex flex-col items-center justify-center w-24 text-white font-bold ${
                    loaded ? styles.fadeIn : styles.hidden
                  }`}
                >
                  <Image
                    src={images.CSS}
                    alt={""}
                    className={`animate-scale ${
                      loaded ? styles.fadeIn : styles.hidden
                    }`}
                  />
                  <p>CSS</p>
                </span>
                <span
                  className={`flex flex-col items-center justify-center w-24 text-white font-bold ${
                    loaded ? styles.fadeIn : styles.hidden
                  }`}
                >
                  <Image
                    src={images.Tailwind}
                    alt={""}
                    className={`animate-scale ${
                      loaded ? styles.fadeIn : styles.hidden
                    }`}
                  />
                  <p>Tailwind</p>
                </span>
              </div>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">Backend:</p>
              <div className="bg-slate-200 w-[100%] h-32 flex items-center px-10  gap-10 rounded-lg my-5 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
                <span
                  className={`flex flex-col items-center justify-center w-24 text-white font-bold ${
                    loaded ? styles.fadeIn : styles.hidden
                  }`}
                >
                  <Image
                    src={images.NodeJs}
                    alt={""}
                    className={`animate-scale ${
                      loaded ? styles.fadeIn : styles.hidden
                    }`}
                  />
                  <p>Node JS</p>
                </span>
                <span
                  className={`flex flex-col items-center justify-center w-24 text-white font-bold ${
                    loaded ? styles.fadeIn : styles.hidden
                  }`}
                >
                  <Image
                    src={images.MongoDb}
                    alt={""}
                    className={`animate-scale ${
                      loaded ? styles.fadeIn : styles.hidden
                    }`}
                  />
                  <p>MongoDb</p>
                </span>
                <span
                  className={`flex flex-col items-center justify-center w-24 text-white font-bold ${
                    loaded ? styles.fadeIn : styles.hidden
                  }`}
                >
                  <Image
                    src={images.Express}
                    alt={""}
                    className={`bg-white  rounded-lg p-2 animate-scale ${
                      loaded ? styles.fadeIn : styles.hidden
                    }`}
                  />
                  <p>Express Js</p>
                </span>
              </div>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">Others:</p>
              <div className="bg-slate-200 w-[100%] h-32 flex items-center px-10  gap-10 rounded-lg my-5 backdrop-filter backdrop-blur-lg bg-opacity-30">
                <span
                  className={`flex flex-col items-center justify-center w-24 text-white font-bold ${
                    loaded ? styles.fadeIn : styles.hidden
                  }`}
                >
                  <Image
                    src={images.GitHub}
                    alt={""}
                    className={`animate-scale ${
                      loaded ? styles.fadeIn : styles.hidden
                    }`}
                  />
                  <p>GitHub</p>
                </span>
                <span
                  className={`flex flex-col items-center justify-center w-24 text-white font-bold ${
                    loaded ? styles.fadeIn : styles.hidden
                  }`}
                >
                  <Image
                    src={images.VsCode}
                    alt={""}
                    className={`animate-scale ${
                      loaded ? styles.fadeIn : styles.hidden
                    }`}
                  />
                  <p>Vs Code</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
