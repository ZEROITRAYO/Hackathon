import * as React from "react";

const Hero = () => {
  return (
    <section className="self-end mt-28 w-full max-w-[1056px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-9 max-md:mt-10">
            <h2 className="text-4xl text-white ml-8">
              Your One-Stop
              <span className="text-[#FF4237]"> Investment </span>
              Hub – Simplify,Strategize, Succeed
            </h2>
            <h3 className="self-start mt-16 text-3xl text-red-500 max-md:mt-10 ml-8">
              Managing your finance
            </h3>
          </div>
        </div>
        <div className="ml-5 w-[61%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c68ec08cbb17d8f0e9c1a75c1928574ad42aa02?placeholderIfAbsent=true&apiKey=6b1c9c0a5e6d416dbf10a19cc8dd94dd"
            alt="Investment illustration"
            className="object-contain grow w-full aspect-[1.21] max-md:mt-10 max-md:max-w-full size-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
