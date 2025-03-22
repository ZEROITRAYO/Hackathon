export function SearchBar() {
    return (
      <section className="flex relative flex-col self-end mt-24 mr-14 max-w-full text-4xl text-white whitespace-nowrap w-[481px] max-md:mt-10 max-md:mr-2.5">
        <h2 className="self-start ml-5 max-md:ml-2.5">Stocks</h2>
        <input
          type="search"
          className="flex shrink-0 mt-10 shadow-sm h-[37px] rounded-[80px] max-md:max-w-full bg-transparent border border-white border-opacity-20 px-4"
          placeholder="Search stocks..."
          aria-label="Search stocks"
        />
      </section>
    );
  }
  