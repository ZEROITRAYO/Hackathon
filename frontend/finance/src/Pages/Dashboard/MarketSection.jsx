export function MarketSection() {
    return (
      <div className="relative self-stretch my-auto max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="w-[76%] max-md:ml-0 max-md:w-full">
            <div className="relative grow mt-40 text-4xl text-white max-md:mt-10">
              <h2>Market Leaders</h2>
              <ul className="mt-1.5 text-2xl text-green-500 w-[424px]">
                <li>qwerty</li>
                <li>qwerty</li>
                <li>qwerty</li>
                <li>qwerty</li>
                <li>qwerty</li>
              </ul>
              <h2 className="mt-6">Market Losers</h2>
              <ul className="text-2xl text-red-500 w-[424px]">
                <li>qwerty</li>
                <li>qwerty</li>
                <li>qwerty</li>
                <li>qwerty</li>
                <li>qwerty</li>
              </ul>
            </div>
          </section>
          <div className="ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div
              className="flex relative shrink-0 mx-auto rounded-full bg-zinc-300 h-[70px] w-[83px] max-md:mt-10"
              role="img"
              aria-label="User profile"
            />
          </div>
        </div>
      </div>
    );
  }
  