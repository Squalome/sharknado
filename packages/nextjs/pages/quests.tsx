// import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">Deep-Sea Quests</span>
          </h1>
          <p className="text-center text-lg">
            Got the NFT? Take the Quest! Browse available questions, see if you&rsquo;re eligible, vote to join the
            lottery for a chance to win big!
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <p>#283 Who is cooler: Shark or Horse?</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <p>#283 Who is cooler: Shark or Horse?</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <p>#283 Who is cooler: Shark or Horse?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
