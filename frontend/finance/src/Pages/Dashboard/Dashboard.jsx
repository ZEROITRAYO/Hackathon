import * as React from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { MarketSection } from "./MarketSection";
import { SearchBar } from "./SearchBar";
import { GradientBackground } from "./GradientBackground";

function Dashboard() {
  return (
    <main className="rounded-none">
      <div className="flex relative flex-col py-px w-full min-h-[1446px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/765b518ee47553f01e867f3bae5b8adbee99b775?placeholderIfAbsent=true&apiKey=8545ec5fa4604c48b0ec0cbc7a290740"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative w-full max-w-[1543px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <section className="w-[67%] max-md:ml-0 max-md:w-full">
              <div className="relative grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-[35%] max-md:ml-0 max-md:w-full">
                    <Sidebar />
                  </div>
                  <div className="ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                    <MainContent />
                  </div>
                </div>
              </div>
            </section>
            <aside className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <MarketSection />
            </aside>
          </div>
        </div>
        <SearchBar />
        <GradientBackground />
      </div>
    </main>
  );
}

export default Dashboard;
