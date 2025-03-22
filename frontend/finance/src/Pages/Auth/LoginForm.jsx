"use client";
import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-white/10 items-center w-130 z-10 px-20 pb-15 rounded-2xl ">
      <h2 className="relative mt-16 text-5xl max-md:mt-10 max-md:text-4xl">
        Login
      </h2>

      <div className="w-full max-w-[302px]">
        <label
          htmlFor="email"
          className="block relative mt-11 text-2xl max-md:mt-10"
        >
          Email id
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex relative shrink-0 mt-4 w-full h-8 rounded-2xl bg-zinc-300 bg-opacity-10 px-4 text-black"
          required
        />
      </div>

      <div className="w-full max-w-[302px]">
        <label htmlFor="password" className="block relative mt-15 mb text-2xl">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="flex relative shrink-0 mt-4 w-full rounded-2xl text-black bg-zinc-300 bg-opacity-10 h-[33px] px-4"
          required
        />
      </div>

      <button
        type="submit"
        className="relative py-3 mt-14 text-xl whitespace-nowrap bg-red-500 rounded-xl w-[94px] max-md:px-5 max-md:mt-10 hover:bg-red-600 transition-colors"
      >
        Signup
      </button>
    </form>
  );
}

export default LoginForm;