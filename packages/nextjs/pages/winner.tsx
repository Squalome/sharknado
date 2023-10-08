import { useEffect, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Fish } from "~~/components/assets/Fish";
import { Address } from "~~/components/scaffold-eth";

const Winner: NextPage = () => {
  const [hasWinner, setHasWinner] = useState(false);
  const [lotteryPayoutAddress, setLotteryPayoutAddress] = useState<string>("");
  const [latestWinnerQuestion, setLatestWinnerQuestion] = useState<string>("");

  const fetchLotteryPayoutAddress = async () => {
    const response = await fetch("https://api.studio.thegraph.com/query/54895/sharknadograph3/v0.0.5", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query:
          "{lotteryPayouts(first:5, orderBy: blockTimestamp, orderDirection: desc){ id lotteryPayoutAddress questionId groupId question}}",
      }),
    });

    const result = await response.json();
    const latest = result?.data?.lotteryPayouts?.[0];
    const address = latest?.lotteryPayoutAddress || "";
    if (address) {
      setHasWinner(true);
      setLotteryPayoutAddress(address);
      setLatestWinnerQuestion(latest?.question);
      console.log("There is a winner! " + address + " for question: " + latest?.question);
    }
  };

  useEffect(() => {
    fetchLotteryPayoutAddress();
  }, []);

  return (
    <>
      <MetaHeader title="Winner" />
      {hasWinner ? (
        <div className="flex items-center flex-col flex-grow pt-10">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <Fish className="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg">Shark Bit the Bait!</h2>
              <i className="text-md mt-3">{latestWinnerQuestion}</i>
              <p className="text-sm mt-3">Winner wallet address:</p>
              <Address address={lotteryPayoutAddress} />
              <p className="text-center text-md">Funds are in your wallet, enjoy the prize!</p>
              <div className="card-actions">
                <Link href="/quests">
                  <button className="btn btn-primary">More Quests</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center flex-col flex-grow pt-10">
          <p className="text-center text-lg mb-6">ALL THE FISH IN THE SEA. THE POOL IS CLOSED</p>
          <p className="text-center text-lg mb-6">#06: Shark or Horse?</p>
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
