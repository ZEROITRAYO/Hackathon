
import * as React from "react";
import SignupHeader from "./SignupHeader";
import SignupForm from "./SignupForm";
import SignupFooter from "./SignupFooter";

function SignupPage() {
  return (
    <main className="text-white rounded-none">
      <div className="flex relative flex-col items-center px-16 pt-8 pb-32 w-full min-h-[644px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9e6d4d7dfeabe885716614414698eeea183c486?placeholderIfAbsent=true&apiKey=6b1c9c0a5e6d416dbf10a19cc8dd94dd"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <SignupHeader />
        <SignupForm />
        <SignupFooter />
      </div>
    </main>
  );
}

export default SignupPage;