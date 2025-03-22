import React from "react";

function LoginFooter() {
  return (
    <footer className="relative mt-2.5 -mb-6 text-xl max-md:mb-2.5">
      <p>
        Dont&apos; have an account?{" "}
        <a
          href="https://www.google.com"
          className="underline text-[#FF4237]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
      </p>
    </footer>
  );
}

export default LoginFooter;