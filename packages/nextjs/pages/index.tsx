import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            {/* <span className="block text-2xl mb-2">What is</span> */}
            <span className="block text-4xl font-bold">What is Sharknado?</span>
          </h1>
          <p className="text-center text-lg">Dive in, Cash out</p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-left items-left max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />

              <p>01 | Join the Quest</p>
              <p>Got an NFT? Find a bait that tickles your fins and hop on.</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-left items-left max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>02 | Create ZK Proof</p>
              <p>Authenticate your NFT ownership with ZK magic.</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-left items-left max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>03 | Vote & Win</p>
              <p>Cast your vote and cross your fins for the big catch!</p>
            </div>
          </div>

          {/* Button that links to quests page */}
          <div className="flex justify-center items-center mt-12">
            <Link href="/quests">
              <button className="btn btn-secondary btn-lg normal-case font-thick bg-base-200">
                Fin-tastic, let&rsquo;s go!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
