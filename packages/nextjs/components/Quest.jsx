import React, { useState } from "react";

/**
 * Quest question card
 */
export const Quest = ({ question, reward, sharks, contractAddress, optionA, optionB }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [response, setResponse] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const handleClick = () => {
    setIsSelected(!isSelected);
    setIsSubmitted(!isSubmitted);
    console.log(`Submitted ${response} with wallet ${walletAddress}`);
  };

  const selectOption = e => {
    console.log(`Selected: ${e.target.innerText}`);
    setResponse(e.target.innerText);
  };

  return (
    <div className="indicator">
      {isSubmitted ? <span className="indicator-item badge badge-warning">submitted</span> : null}

      <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
        {/* Quest details  */}
        <p>Eligible Contract address: {contractAddress}</p>
        <p>{question}</p>
        <p>Bait: {reward}</p>
        <p>Sharks: {sharks}</p>

        {isSelected ? (
          // Options
          <div className="flex flex-col bg-base-100 px-12 pt-6 text-center items-center max-w-xs rounded-3xl">
            <div className="flex flex-row gap-3 pb-6">
              <button
                onClick={e => selectOption(e)}
                className={response == optionA.toUpperCase() ? "btn btn-primary" : "btn btn-secondary"}
              >
                {optionA}
              </button>
              <button
                onClick={e => selectOption(e)}
                className={response == optionB.toUpperCase() ? "btn btn-primary" : "btn btn-secondary"}
              >
                {optionB}
              </button>
            </div>
            <label className="label">
              <span className="label-text">Paste a fresh wallet address of yours here to join the pool!</span>
            </label>
            <input
              onChange={e => setWalletAddress(e.target.value)}
              className="input input-bordered w-full mb-4"
              type="text"
              placeholder="Wallet address"
            />
            <button
              onClick={() => handleClick()}
              className="btn btn-secondary btn-md normal-case font-thick bg-base-200"
            >
              Submit
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsSelected(!isSelected)}
            className="btn btn-secondary btn-md normal-case font-thick bg-base-200"
          >
            Join Quest
          </button>
        )}
      </div>
    </div>
  );
};
