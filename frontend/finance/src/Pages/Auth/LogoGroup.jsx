import React from "react";

export function LogoGroup() {
  return (
    <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
      <div className="flex gap-10 my-auto">
        <div className="flex items-start">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/15e0861f6bbd52664ecdec96936ad43fa7348f27?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
            alt="Logo 1"
            className="object-contain shrink-0 aspect-[1.47] w-[25px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7a6d890911642d73a378a59fc13b6afadeb49c0?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
            alt="Logo 2"
            className="object-contain shrink-0 aspect-[3.86] w-[81px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/136bec0a442f5daa51cc61a7fe966733ed6c3cc3?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
            alt="Logo 3"
            className="object-contain shrink-0 aspect-[4.41] w-[75px]"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9269da447995064b082b446a62ea793cb0f9a0?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
          alt="Logo 4"
          className="object-contain shrink-0 my-auto aspect-[4.17] w-[50px]"
        />
      </div>
      <div className="flex gap-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aff30fa5b82dbfbf95698c8a66a6aafe352ea94c?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
          alt="Logo 5"
          className="object-contain shrink-0 my-auto aspect-[2.65] w-[45px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/972958f7f42d1151581b0eb1c5faa375aea80135?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
          alt="Logo 6"
          className="object-contain shrink-0 aspect-[1.81] w-[92px]"
        />
      </div>
    </div>
  );
}