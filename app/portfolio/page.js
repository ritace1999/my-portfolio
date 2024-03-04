"use client";

import { useEffect, useState } from "react";
import HomeLayout from "@/components/home/HomeLayout";
import styles from "../Home.module.css";
import Card from "@/components/card/Card";
import { images } from "@/constants";

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, []);

  const projects = [
    {
      _id: "1",
      title: "Mern-Blog-App",
      desc: "The MERN blog app is a web platform powered by MongoDB, Express.js, React, and Node.js.",
      link: "https://github.com/ritace1999/MERN-BLOG-APP",
      image: images.Mern,
    },
    {
      _id: "2",
      title: "My-Portfolio",
      desc: "The Portfolio app is a personal website powered by Next Js",
      link: "https://github.com/ritace1999/my-portfolio",
      image: images.Portfolio,
    },
  ];

  return (
    <HomeLayout>
      <div className="flex w-full h-full overflow-y-auto mx-auto">
        <div
          className={` my-auto mx-12  cursor-pointer ${
            loaded ? styles.fadeIn : styles.hidden
          }`}
        >
          <div
            className={`flex  my-2 w-[60%] gap-y-2 ${
              loaded ? styles.fadeIn : styles.hidden
            }`}
          >
            <h1 className="text-5xl font-extrabold text-[#a6e4e7]">
              My Portfolio
            </h1>
          </div>
          <div className="flex  gap-10 flex-wrap my-5 mx-auto">
            {projects.map((project) => (
              <Card key={project._id} project={project} loaded={loaded} />
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
