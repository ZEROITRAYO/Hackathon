import * as React from "react";
import Button from "../../components/Button";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between w-full whitespace-nowrap max-md:max-w-full md:max-h-full">
      <div className="flex gap-1.5 self-start mt-2.5 text-3xl text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/042223570789192f866d38f215efce3b4d958a48?placeholderIfAbsent=true&apiKey=6b1c9c0a5e6d416dbf10a19cc8dd94dd"
          alt="Money logo"
          className="object-contain shrink-0 my-auto w-9 aspect-[1.64]"
        />
        <h1>Money</h1>
      </div>
      <nav className="flex gap-10 text-xl text-slate-400">
        <button className="my-auto" >Login</button>
        <div className="rounded-3xl">
          <Button variant="primary">Signup</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
