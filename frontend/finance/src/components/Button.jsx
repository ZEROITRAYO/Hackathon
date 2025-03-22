"use client";
import * as React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles = "rounded-l text-l";
  const variants = {
    primary: "bg-red-500 px-5 pt-1.5 pb-1.5",
    secondary: "text-slate-400",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className} text-l`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
