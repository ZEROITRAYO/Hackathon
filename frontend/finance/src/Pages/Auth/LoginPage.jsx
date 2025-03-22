import * as React from "react";
import { LogoGroup } from "./LogoGroup"
import { ImageColumns } from "./ImageColumns";

function LoginPage() {
  return (
    <main className="flex relative flex-col items-end px-20 pt-24 pb-56 w-full min-h-[950px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d7e67cd3c320bfd5151a7bf518800ac6162fb68?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
      <section className="relative -mb-11 w-full max-w-[1063px] max-md:mb-2.5 max-md:max-w-full">
        <LogoGroup />
        <ImageColumns />
      </section>
    </main>
  );
}

export default LoginPage;