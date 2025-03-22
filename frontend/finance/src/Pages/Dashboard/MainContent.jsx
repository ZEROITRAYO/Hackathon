export function MainContent() {
    return (
      <section className="flex relative flex-col mt-44 w-full max-md:mt-10 max-md:max-w-full">
        <h2 className="self-start text-5xl text-white max-md:text-4xl">
          Hey, User!
        </h2>
        <div className="flex z-10 flex-wrap gap-3 mt-28 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <div className="shrink-0 w-px border border-solid border-white border-opacity-60 h-[270px]" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ea861581ecdc49088b6384149a3190a591c7938?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
            alt="Graph"
            className="object-contain grow shrink-0 my-auto aspect-[3.31] basis-0 w-fit max-md:max-w-full"
          />
        </div>
        <div className="shrink-0 h-px border border-solid border-white border-opacity-60 max-md:max-w-full" />
      </section>
    );
  }
  