import { Quest } from "./Quest";

/**
 * List of quests
 */
export const QuestList = () => {
  return (
    <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
      <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
        <Quest
          question_id="#06"
          question="Who is cooler: Shark or Horse?"
          contractAddress="0xDe00050C5eCBA5E32E1D0b57e1f6669184f4fC15"
          reward="0.1 ETH"
          sharks="6/7"
          optionA="Shark"
          optionB="Horse"
        />
        <Quest
          question_id="#07"
          question="Pineapple on pizza?"
          contractAddress="0xDe00050C5eCBA5E32E1D0b57e1f6669184f4fC15"
          reward="1 ETH"
          sharks="1/7"
          optionA="Yes"
          optionB="No"
        />
        <Quest
          question_id="#08"
          question="ETH or BTC?"
          contractAddress="0xDe00050C5eCBA5E32E1D0b57e1f6669184f4fC15"
          reward="0.68 ETH"
          sharks="4/7"
          optionA="ETH"
          optionB="BTC"
        />
      </div>
    </div>
  );
};
