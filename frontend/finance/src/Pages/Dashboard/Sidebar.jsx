"use client";
import * as React from "react";

export function Sidebar() {
  return (
    <nav className="flex relative flex-col items-start px-12 py-16 w-full text-2xl font-semibold text-red-50 whitespace-nowrap max-md:px-5 max-md:mt-10">
      <div className="flex gap-4 items-start self-end text-4xl text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e13eeefe3303204b9eb9e2f43ca87517b9f730a3?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
          alt="Money icon"
          className="object-contain shrink-0 mt-1.5 aspect-[1.62] w-[63px]"
        />
        <h1>Money</h1>
      </div>
      <ul className="w-full space-y-11 mt-36 max-md:mt-10">
        <li>
          <button className="hover:text-white focus:outline-none">
            Wallet
          </button>
        </li>
        <li>
          <button className="hover:text-white focus:outline-none">
            Messages
          </button>
        </li>
        <li>
          <button className="hover:text-white focus:outline-none">Trade</button>
        </li>
        <li>
          <button className="hover:text-white focus:outline-none">
            Settings
          </button>
        </li>
        <li>
          <button className="hover:text-white focus:outline-none">
            Market
          </button>
        </li>
        <li>
          <button className="hover:text-white focus:outline-none">Home</button>
        </li>
      </ul>
    </nav>
  );
}
