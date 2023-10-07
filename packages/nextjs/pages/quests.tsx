// import Link from "next/link";
import { QuestList } from "../components/QuestList";
import { QuestsIntro } from "../components/QuestsIntro";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Quests: NextPage = () => {
  return (
    <>
      <MetaHeader title="Quests" />
      <div className="flex items-center flex-col flex-grow pt-10">
        <QuestsIntro />
        <QuestList />
      </div>
    </>
  );
};

export default Quests;
