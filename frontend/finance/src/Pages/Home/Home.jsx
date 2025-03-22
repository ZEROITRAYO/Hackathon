import * as React from "react";
import Header from "./Header";
import HeroSection from "./Hero";

const DashboardPage = () => {
  return (
    <main >
      <div className="flex relative flex-col items-center px-20 pt-24 pb-20 w-full md:h-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <Header />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21412f73d7fff4d82cfdebac446d97f36084d66b?placeholderIfAbsent=true&apiKey=6b1c9c0a5e6d416dbf10a19cc8dd94dd"
          alt="Background"
          className="object-cover absolute inset-0 size-400 rounded-none"
        />

        <div className="flex relative px-0 justify-center">

        </div>
        <div className="flex relative flex-col -mb-11 w-full max-w-[1115px] max-md:mb-2.5 max-md:max-w-full max-md:max-h-full">

          <HeroSection />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;