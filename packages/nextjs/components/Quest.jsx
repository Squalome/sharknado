import React, { useState } from "react";
import { Identity } from "@semaphore-protocol/identity";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { AddressInput } from "~~/components/scaffold-eth";
import { useSharknadoContractWrite } from "~~/hooks/useContractWrite";

/**
 * Quest question card
 */
export const Quest = ({ questionId, groupId, question, reward, sharks, contractAddress, optionA, optionB }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [response, setResponse] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const { address } = useAccount();

  const { writeAsync } = useSharknadoContractWrite("joinGroup");

  const handleSubmit = () => {
    console.log({ address });

    // just always use wallet address as identity string
    const identity = new Identity(address);

    console.log({ identity });

    writeAsync(questionId.toString(), groupId.toString(), identity._commitment);

    setIsSelected(!isSelected);
    setIsModalOpen(true);

    if (!isSubmitted) {
      setIsSubmitted(!isSubmitted);
    }
    console.log(`Submitted ${response} with wallet ${address}`);
  };

  const selectOption = e => {
    console.log(`Selected: ${e.target.innerText}`);
    setResponse(e.target.innerText);
  };

  const handleSign = () => {
    setIsModalOpen(false);
    console.log(`Signed transactions`);
    window.location.href = "/winner";
  };

  return (
    <div className="indicator">
      {isSubmitted ? <span className="indicator-item badge badge-warning">submitted</span> : null}

      <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
        {/* Quest details  */}
        <strong>{question_id}</strong>
        <Address address={contractAddress} />
        <p>{question}</p>
        <p>Bait: {reward}</p>
        <p>Sharks: {sharks}</p>

        {/* Show button to join quest or show options if quest is already joined  */}
        {isSelected ? (
          // Options
          <div className="flex flex-col bg-base-100 px-12 pt-6 text-center items-center max-w-xs rounded-3xl">
            <div className="flex flex-row gap-3 pb-6">
              <button
                onClick={e => selectOption(e)}
                className={response == optionA.toUpperCase() ? "btn btn-accent" : "btn btn-secondary"}
              >
                {optionA}
              </button>
              <button
                onClick={e => selectOption(e)}
                className={response == optionB.toUpperCase() ? "btn btn-accent" : "btn btn-secondary"}
              >
                {optionB}
              </button>
            </div>
            <label className="label">
              <span className="label-text">Paste a fresh wallet address of yours here to join the pool!</span>
            </label>
            <AddressInput onChange={setWalletAddress} value={walletAddress} placeholder="Wallet address" />
            <button
              onClick={() => handleSubmit()}
              className="btn btn-secondary btn-md normal-case font-thick bg-base-200 mt-4"
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

      {/* Show modal popup if response is submitted */}
      {isSubmitted ? (
        <>
          {/* Check checkbox if modal should be open */}
          {isModalOpen ? <input type="checkbox" id="my-modal" class="modal-toggle" checked /> : null}

          <dialog id="my-modal" className="modal">
            <div className="modal-box bg-blue-600 float-left">
              <progress className="progress progress-warning w-100 mb-6"></progress>
              <h1 className=" font-bold text-lg">Sign Transactions</h1>
              <p className=" text-md">Please open your wallet to sign the following transactions:</p>
              <ul className="steps steps-vertical">
                <li className="step step-primary">Create Semiphore ID</li>
                <li className="step step-primary">ZK Proof</li>
                <li className="step step-primary">Vote in the Quest and join lottery 💦</li>
              </ul>
              <div className="modal-action">
                <form method="dialog">
                  <button onClick={() => handleSign()} className="btn btn-secondary">
                    Sign transactions
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      ) : null}
    </div>
  );
};
