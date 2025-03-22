import * as React from "react";
import Button from "../../components/Button";
import { useNavigate } from 'react-router';

const Header = () => {

  const navi = useNavigate();

  function handleClick() {
    navi('/login')
  }

  return (
    <header className="m-0 flex flex-wrap justify-between w-full whitespace-nowrap max-md:max-w-full md:max-h-full backdrop-blur-xl p-4 bg-white/2 bg-gradient-to-b from-orange-0 to-transparent rounded-none z-10 fixed top-0">
      <div className="flex gap-1.5 self-start mt-2.5 text-3xl text-white ml-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/042223570789192f866d38f215efce3b4d958a48?placeholderIfAbsent=true&apiKey=6b1c9c0a5e6d416dbf10a19cc8dd94dd"
          alt="Money logo"
          className="object-contain shrink-0 my-auto w-9 aspect-[1.64] ml-5"
        />
        <h1>Money</h1>
      </div>
      <nav className="flex gap-10 text-10xl text-slate-400">

        <div className="rounded-3xl">
          <Button className="my-auto border-2 border-red-700 hover:cursor-pointer hover:bg-red-700 bg-transparent mr-2 ml-2" onClick={handleClick}>Login</Button>
          <Button className="my-auto border-2 border-red-700 hover:cursor-pointer hover:bg-red-700 bg-transparent mr-20 ml-2 " variant="primary" onClick={() => { navi('signup') }}>Signup</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
