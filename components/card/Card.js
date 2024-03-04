import Image from "next/image";
import Link from "next/link";
import styles from "../../app/Home.module.css";
import React from "react";

const Card = ({ project, loaded }) => {
  return (
    <div className="">
      <div className=" w-full h-full rounded-lg shadow dark:bg-gray-800  ">
        <Image
          className="rounded-t-lg object-fill w-[430px] h-[250px]"
          width={5000}
          height={5000}
          src={project.image}
          alt={project.title}
        />

        <div className="p-5 w-[400px]">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>

          <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400 whitespace-normal">
            {project.desc}
          </p>
          <div
            className={`flex gap-8 mt-10 ${
              loaded ? styles.fadeIn : styles.hidden
            }`}
          >
            <Link
              href={project.link}
              className={`flex gap-1 justify-center items-center px-3 py-3 font-semibold group relative overflow-hidden hover:text-white bg-white bg-opacity-20 backdrop-blur-md rounded-lg `}
            >
              <span className="text-xl">Read More</span>
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
