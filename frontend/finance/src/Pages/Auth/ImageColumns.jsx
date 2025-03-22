import React from "react";

export function ImageColumns() {
  return (
    <div className="mt-28 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-2/5 max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/efdf161aab34eedfa034a0d42910d878a5a061d6?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
            alt="Left column image"
            className="object-contain self-stretch my-auto w-full aspect-[1.11] max-md:mt-10"
          />
        </div>
        <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c68ec08cbb17d8f0e9c1a75c1928574ad42aa02?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
            alt="Right column image"
            className="object-contain grow w-full aspect-[1.21] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}