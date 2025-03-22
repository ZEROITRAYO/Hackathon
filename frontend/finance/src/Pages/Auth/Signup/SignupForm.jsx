"use client";
import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-white/10 items-center w-130 z-10 px-20 pb-10 rounded-2xl ">
      <h2 className="relative mt-10 mb-8 text-3xl max-md:mt-10 max-md:text-4xl">
        Signup
      </h2>

      <div className="w-full max-w-[302px]">
        <input
          placeholder="Name"
          type="text"
          id="name"

          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex relative shrink-0 mt-2 mb-2 w-full h-10 rounded-2xl bg-zinc-300 bg-opacity-10 px-4 text-black"
          required
        />
      </div>

      <div className="w-full max-w-[302px]">
        <input
          placeholder="Email id"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex relative shrink-0 mt-2 mb-2 w-full h-10 rounded-2xl bg-zinc-300 bg-opacity-10 px-4 text-black"
          required
        />
      </div>

      <div className="w-full max-w-[302px]">
        <input
          placeholder="Annual Income"
          type="number"
          id="income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="flex relative shrink-0 mt-2 mb-2 w-full h-10 rounded-2xl bg-zinc-300 bg-opacity-10 px-4 text-black"
          required
        />
      </div>

      <div className="w-full max-w-[302px] flex relative">
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="flex w-full rounded-2xl text-black bg-zinc-300 bg-opacity-10 h-10 px-4 pr-10 mt-2 mb-2" // pr-10 to add space on the right side
          required
        />
        <div className="text-black absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => { setShowPassword(!showPassword) }}>
          {showPassword ? <LuEye /> : <LuEyeClosed />}
        </div>
      </div>


      <div className="w-full max-w-[302px] flex relative">
        <input
          placeholder="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="flex relative shrink-0 mt-2 mb-2 w-full rounded-2xl text-black bg-zinc-300 bg-opacity-10 h-10 px-4"
          required
        />
        <div className="text-black absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}>
          {showConfirmPassword ? <LuEye /> : <LuEyeClosed />}
        </div>
      </div>

      <button
        type="submit"
        className="relative py-3 mt-10 text-xl whitespace-nowrap bg-red-500 rounded-xl w-[94px] max-md:px-5 max-md:mt-10 hover:bg-red-600 transition-colors"
      >
        Signup
      </button>
    </form>
  );
}

export default SignupForm;