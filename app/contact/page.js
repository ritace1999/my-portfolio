"use client";

import { useEffect, useState } from "react";
import HomeLayout from "@/components/home/HomeLayout";
import Image from "next/image";
import { images } from "@/constants";
import styles from "../Home.module.css";
import toast from "react-hot-toast";
import axios from "axios";

export default function ContactPage() {
  const [loaded, setLoaded] = useState(false);
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, []);

  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", inputs);
      toast.success(response.data.message);
      setInputs({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message");
    }
  };

  return (
    <HomeLayout className="h-auto">
      <div className="flex w-full  ">
        <div
          className={`my-auto ml-16 h-[380px] w-[380px] rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer ${
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
          className={`flex flex-col items-center  my-[100px] w-[60%] gap-y-2 ${
            loaded ? styles.fadeIn : styles.hidden
          }`}
        >
          <h1 className="text-5xl font-extrabold text-[#a6e4e7]">Contact</h1>

          {/* Location */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[55%] gap-2  "
          >
            <input
              type="text"
              name="fullName"
              required
              onChange={handleInputchange}
              value={inputs.fullName}
              placeholder="Full Name"
              className="outline-none rounded-md p-3"
            />
            <input
              type="email"
              required
              name="email"
              onChange={handleInputchange}
              value={inputs.email}
              placeholder="Email"
              className="outline-none rounded-md p-3"
            />
            <input
              type="text"
              name="subject"
              required
              onChange={handleInputchange}
              value={inputs.subject}
              placeholder="Subject"
              className="outline-none rounded-md p-3"
            />
            <textarea
              placeholder="Message"
              required
              onChange={handleInputchange}
              value={inputs.message}
              name="message"
              className="outline-none rounded-md p-3"
            ></textarea>
            <button
              type="submit"
              className={`flex gap-1 justify-center items-center px-3 py-3 font-semibold group relative overflow-hidden hover:text-white bg-white bg-opacity-20 backdrop-blur-md rounded-lg `}
            >
              <span className="text-xl">Submit</span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
            </button>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
}
