import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function LoginFooter() {

  const navigate = useNavigate();

  return (
    <footer className="relative mt-2.5 -mb-6 text-xl max-md:mb-2.5">
      <p>
        Dont&apos; have an account?{" "}
        <a
          className="underline text-[#FF4237] hover:cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => { navigate('/signup') }}
        >
          Register
        </a>
      </p>
    </footer>
  );
}

export default LoginFooter;