// import Link from "next/link";
import { Quest } from "../components/Quest";
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
            <Quest
              question="#06 Who is cooler: Shark or Horse?"
              contractAddress="0xBC4CA...6f13D"
              reward="0.1 ETH"
              sharks="6/7"
              optionA="Shark"
              optionB="Horse"
            />
            <Quest
              question="#07 Pineapple on pizza?"
              contractAddress="0xBC4CA...6f13D"
              reward="1 ETH"
              sharks="1/7"
              optionA="Yes"
              optionB="No"
            />
            <Quest
              question="#08 ETH or BTC?"
              contractAddress="0xBC4CA...6f13D"
              reward="0.68 ETH"
              sharks="4/7"
              optionA="ETH"
              optionB="BTC"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
