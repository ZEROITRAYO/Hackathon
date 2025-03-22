"use client";
import * as React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles = "rounded-xl text-xl";
  const variants = {
    primary: "bg-red-500 px-5 pt-3.5 pb-5",
    secondary: "text-slate-400",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
