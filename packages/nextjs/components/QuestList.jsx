import { Quest } from "./Quest";
import { useContract } from "~~/hooks/useContractRead";

/**
 * List of quests
 */
export const QuestList = () => {
  const contract = useContract("getQuestionList");

  console.log({ contract: contract.data });

  return (
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
  );
};
