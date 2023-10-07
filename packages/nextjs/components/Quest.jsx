import React, { useState } from "react";
import { SemaphoreEthers } from "@semaphore-protocol/data";
import { Group } from "@semaphore-protocol/group";
import { Identity } from "@semaphore-protocol/identity";
import { generateProof } from "@semaphore-protocol/proof";
import { utils } from "ethers";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const { address } = useAccount();

  const { write: writeJoinGroup } = useSharknadoContractWrite("joinGroup");
  const { write: writeSendAnswerToQuestion } = useSharknadoContractWrite("sendAnswerToQuestion");

  const handleSubmit = async () => {
    let success = false;

    setIsModalOpen(false);

    // just always use wallet address as identity string
    const identity = new Identity(address);

    console.log({ identity });

    console.log("questionId: ", questionId.toString());
    console.log("groupId: ", groupId.toString());
    try {
      await writeJoinGroup({ args: [questionId.toString(), groupId.toString(), identity._commitment] });
      console.log("joined Group");
    } catch (e) {
      console.log(e?.message);
      console.log("failed joining group, already joined or not holder?");
    }

    try {
      const semaphore = new SemaphoreEthers("https://gnosis.drpc.org", {
        address: process.env.NEXT_PUBLIC_SEMAPHORE_CONTRACT_ADDRESS,
      });

      const users = await semaphore.getGroupMembers(groupId.toString());

      console.log({ users });

      const group = new Group(groupId.toString(), 20, users);

      console.log({ group });

      const isUpvote = response === "YES" ? 1 : 0;

      const addressBytes = utils.arrayify(walletAddress);
      const packedData = new Uint8Array(21);

      packedData[0] = isUpvote;

      for (let i = 0; i < 20; i++) {
        packedData[i + 1] = addressBytes[i];
      }

      console.log({ packedData });

      const packedDataBytesLike = utils.hexlify(packedData);
      const signal = packedDataBytesLike;

      console.log({ signal });

      const { proof, merkleTreeRoot, nullifierHash } = await generateProof(identity, group, groupId.toString(), signal);

      console.log({ proof, merkleTreeRoot, nullifierHash });

      await writeSendAnswerToQuestion({
        args: [
          questionId.toString(),
          groupId.toString(),
          response === "YES",
          walletAddress,
          merkleTreeRoot,
          nullifierHash,
          proof,
        ],
      });
      success = true;

      console.log("sent answer");
    } catch (e) {
      console.log(e?.message);
      console.log("failed sending answer");
    }

    if (success) {
      setIsSelected(!isSelected);
      setIsSubmitted(!isSubmitted);

      console.log(`Submitted ${response} with wallet ${walletAddress}`);
    }
  };

  const selectOption = e => {
    console.log(`Selected: ${e.target.innerText}`);
    setResponse(e.target.innerText);
  };

  const handleSign = () => {
    // setIsModalOpen(false);
    console.log(`Signed transactions`);
    window.location.href = "/winner";
  };

  return (
    <div className="indicator">
      {isSubmitted ? <span className="indicator-item badge badge-warning">submitted</span> : null}

      <div className="flex flex-col bg-base-100 px-10 py-10 text-left items-left max-w-xs rounded-2xl">
        {/* Quest details  */}
        <strong className="text-lg pb-6">
          #{questionId.toString()}: {question}
        </strong>
        <Address address={contractAddress} />
        <p className="py-2 my-0">Bait: {reward.toString()} ETH</p>
        <p className="pb-2 my-0">Sharks: {sharks}</p>

        {/* Show button to join quest or show options if quest is already joined  */}
        {isSelected ? (
          // Options
          <div className="flex flex-col bg-base-100 text-left items-left max-w-xs rounded-2xl">
            <div className="flex flex-row gap-3 pb-0">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow items-center">
                  <button
                    onClick={e => selectOption(e)}
                    className={
                      response == optionA.toUpperCase() ? "btn rounded-lg btn-secondary" : "btn rounded-lg btn-accent"
                    }
                  >
                    {optionA}
                  </button>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="grid flex-grow h-32 items-center">
                  <button
                    onClick={e => selectOption(e)}
                    className={
                      response == optionB.toUpperCase() ? "btn rounded-lg btn-secondary" : "btn rounded-lg btn-accent"
                    }
                  >
                    {optionB}
                  </button>
                </div>
              </div>
            </div>
            <label className="label">
              <span className="label-text">Paste a fresh wallet address of yours here to join the pool!</span>
            </label>
            <AddressInput onChange={setWalletAddress} value={walletAddress} placeholder="Wallet address" />
            <button
              onClick={() => handleSubmit()}
              className="btn rounded-lg btn-secondary btn-md normal-case font-thick bg-base-200 mt-4"
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
                <li className="step step-primary">Create Semiphore ID 💳</li>
                <li className="step step-primary">ZK Proof 😎</li>
                <li className="step step-primary">Vote in the Quest and join lottery 🦈</li>
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
