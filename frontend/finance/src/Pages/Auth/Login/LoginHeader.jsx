import React from "react";

function LoginHeader() {
  return (
    <header className="flex relative gap-1 self-start text-3xl whitespace-nowrap">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bd1de34f71e67032da7ad0e1e9cbcff920ca33?placeholderIfAbsent=true&apiKey=6b1c9c0a5e6d416dbf10a19cc8dd94dd"
        alt="Money Logo"
        className="object-contain shrink-0 self-start mt-2.5 aspect-[1.56] w-[25px]"
      />
      <h1>Money</h1>
    </header>
  );
}

export default LoginHeader;