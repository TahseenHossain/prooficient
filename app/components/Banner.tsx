"use client";
import Image from "next/image";
import Table from "@/public/pictures/Browser.jpg";
import { useState } from "react";

export default function Banner() {
  const [play, setPlay] = useState(false);

  return (
    <div className="h-full w-full top-52 left-0 bottom-0 right-0 bg-gradient-to-b from-[#FFFFFF] to-[#7EDAA4] px-10">
      <div>
        <div className="min-w-80 max-w-[912px] px-4 flex flex-col justify-center text-center items-center mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center flex justify-center mt-16 mb-5">
            Perfect Your Words with Prooficient
          </h1>
          <h3 className="text-base md:text-xl lg:text-2xl font-normal py-4">
            Make every word count. Ensure clarity, accuracy, and professionalism
            in your writing with expert proofreading services that catch every
            error, from typos to tricky grammar.
          </h3>
          <button className="bg-[#212121] text-white h-[72px] w-64 rounded-lg font-bold text-2xl mt-5 mb-3">
            Get started
          </button>
        </div>
      </div>
      <div className="mx-2 md:mx-8 lg:mx-32 shadow-2xl mt-8 lg:mt-24">
        {play ? (
          <iframe
            src="https://www.youtube.com/embed/NY76mkzJT6o"
            allowFullScreen
            className="h-[720px]  w-full"
          ></iframe>
        ) : (
          <div className="mx-auto max-w-full flex flex-col justify-center items-center">
            <button
              className="flex justify-center items-center bg-black bg-opacity-40 rounded-full w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 absolute z-40"
              onClick={() => setPlay(true)}
            >
              <svg
                width="192"
                height="192"
                viewBox="0 0 192 192"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M86.1054 73.7795C83.4407 72.1299 80 74.0466 80 77.1806V114.819C80 117.953 83.4407 119.87 86.1054 118.22L116.506 99.4011C119.032 97.8373 119.032 94.1627 116.506 92.5989L86.1054 73.7795Z"
                    fill="white"
                  />
                </g>
              </svg>
            </button>
            <Image
              src={Table}
              alt=""
              objectFit="cover"
              className="z-30 w-full"
            ></Image>
          </div>
        )}
      </div>
    </div>
  );
}
