// import Link from "next/link";
import { QuestList } from "../components/QuestList";
import { QuestsIntro } from "../components/QuestsIntro";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <QuestsIntro />
        <QuestList />
      </div>
    </>
  );
};

export default Home;
