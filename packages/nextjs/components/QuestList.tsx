"use client";

import dynamic from "next/dynamic";
import { Quest } from "./Quest";
import { useSharknadoContract } from "~~/hooks/useContractRead";

type Question = {
  answerThreshold: number;
  bountyAmount: bigint;
  downVote: number;
  eligibleHolderTokenContract: string;
  groupId: bigint;
  isPayedOut: boolean;
  lotteryPayoutAddresses: string[];
  question: string;
  questionId: bigint;
  upVote: number;
};

/**
 * List of quests
 */
const QuestList = () => {
  const contract = useSharknadoContract("getQuestionList");

  const questionList = contract.data as undefined | Question[];

  console.log(questionList?.[1]);

  return (
    <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
      <div className="flex flex-wrap justify-center items-center gap-12 flex-col sm:flex-row">
        {questionList?.map(q => (
          <Quest
            key={q.questionId.toString()}
            question_id={q.questionId}
            question={q.question}
            contractAddress={q.eligibleHolderTokenContract}
            reward={q.bountyAmount}
            sharks={`${q.upVote + q.downVote}/${q.answerThreshold}`}
            optionA={"Yes"}
            optionB={"No"}
          />
        ))}
      </div>
    </div>
  );
};

const DynamicQuestList = dynamic(() => Promise.resolve(QuestList), { ssr: false });

export { DynamicQuestList as QuestList };
