import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Fish } from "~~/components/assets/Fish";
import { Address } from "~~/components/scaffold-eth";

const Winner: NextPage = () => {
  const [hasWinner, setHasWinner] = useState(false);

  return (
    <>
      <MetaHeader title="Winner" />
      {hasWinner ? (
        <div className="flex items-center flex-col flex-grow pt-10">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <Fish className="fish" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Put your fins together for...</h2>
              <Address address="0xDe00050C5eCBA5E32E1D0b57e1f6669184f4fC15" />
              <p className="text-center text-sm">Congratulations! Funds are in your wallet, enjoy the prize.</p>
              <div className="card-actions">
                <Link href="/quests">
                  <button className="btn btn-primary">More Quests</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // <div className="flex items-center flex-col flex-grow pt-10">
        //   <div className="px-5">
        //     <h1 className="text-center mb-8">
        //       <span className="block text-4xl font-bold">Shark Bit the Bait!</span>
        //     </h1>
        //     <p className="text-center text-md">WINNER: </p>
        //     <Address address="0xDe00050C5eCBA5E32E1D0b57e1f6669184f4fC15" />
        //     <p className="text-center text-sm">Congratulations! Funds are in your wallet, enjoy the prize.</p>
        //   </div>
        // </div>
        <div className="flex items-center flex-col flex-grow pt-10">
          <div className="circle">
            <div className="wave"></div>
          </div>
          <button onClick={() => setHasWinner(!hasWinner)} className="btn btn-primary mt-12 px-12">
            FISH
          </button>
        </div>
      )}
    </>
  );
};

export default Winner;
