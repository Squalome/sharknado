import React, { useState } from "react";
// import { SemaphoreEthers } from "@semaphore-protocol/data";
// import { Group } from "@semaphore-protocol/group";
import { Identity } from "@semaphore-protocol/identity";
// import { generateProof } from "@semaphore-protocol/proof";
// import { utils } from "ethers";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { AddressInput } from "~~/components/scaffold-eth";

// import { useSharknadoContractWrite } from "~~/hooks/useContractWrite";
// import scaffoldConfig from "~~/scaffold.config";

/**
 * Quest question card
 */
export const Quest = ({ questionId, groupId, question, reward, sharks, contractAddress, optionA, optionB }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [isError, setIsError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");

  const { address } = useAccount();
  const sharksArray = sharks.split("/");

  // const { write: writeJoinGroup } = useSharknadoContractWrite("joinGroup");
  // const { write: writeSendAnswerToQuestion } = useSharknadoContractWrite("sendAnswerToQuestion");

  const handleSubmit = async () => {
    // just always use wallet address as identity string
    const identity = new Identity(address);
    console.log({ identity });
    console.log("questionId: ", questionId.toString());
    console.log("groupId: ", groupId.toString());

    setIsModalOpen(true);
    setIsSubmitted(true);
    setIsSelected(!isSelected);
    console.log(isModalOpen);

    // try {
    //   await writeJoinGroup({ args: [questionId.toString(), groupId.toString(), identity._commitment] });
    //   console.log("joined Group");
    // } catch (e) {
    //   console.log(e?.message);
    //   console.log("failed joining group, already joined or not holder?");
    // }

    // try {
    //   const semaphore = new SemaphoreEthers(scaffoldConfig.rpcEndpoint, {
    //     address: process.env.NEXT_PUBLIC_SEMAPHORE_CONTRACT_ADDRESS,
    //   });

    //   const users = await semaphore.getGroupMembers(groupId.toString());
    //   console.log({ users });

    //   const group = new Group(groupId.toString(), 20, users);
    //   console.log({ group });

    //   const isUpvote = response === "YES" ? 1 : 0;
    //   const addressBytes = utils.arrayify(walletAddress);
    //   const packedData = new Uint8Array(21);
    //   packedData[0] = isUpvote;

    //   for (let i = 0; i < 20; i++) {
    //     packedData[i + 1] = addressBytes[i];
    //   }
    //   console.log({ packedData });

    //   const packedDataBytesLike = utils.hexlify(packedData);
    //   const signal = packedDataBytesLike;
    //   console.log({ signal });

    //   const { proof, merkleTreeRoot, nullifierHash } = await generateProof(identity, group, groupId.toString(), signal);
    //   console.log({ proof, merkleTreeRoot, nullifierHash });

    //   await writeSendAnswerToQuestion({
    //     args: [
    //       questionId.toString(),
    //       groupId.toString(),
    //       response === "YES",
    //       walletAddress,
    //       merkleTreeRoot,
    //       nullifierHash,
    //       proof,
    //     ],
    //   });
    //   console.log("sent answer");

    //   setIsSelected(!isSelected);
    //   setIsSubmitted(!isSubmitted);

    //   console.log(`Submitted ${response} with wallet ${walletAddress}`);
    // } catch (e) {
    //   // Raise alert
    //   // setIsError(true);
    //   // setErrorMsg(`${e?.message}`);
    //   console.log(isError);
    //   console.log(e?.message);
    //   console.log("failed sending answer");
    // }
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
    <>
      <div className="indicator">
        {isSubmitted ? <span className="indicator-item badge badge-warning">submitted</span> : null}

        <div className="flex flex-col bg-base-100 px-10 py-10 text-left items-left max-w-xs rounded-2xl">
          {/* Quest details  */}
          <strong className="text-lg pb-6">
            #{questionId.toString()}: {question}
          </strong>
          <Address address={contractAddress} />
          <p className="py-2 my-0">Bait: {reward.toString()} ETH</p>
          <p className="pb-2 my-0">
            {sharks} Sharks:{" "}
            <progress
              className="progress progress-primary w-56"
              value={parseInt(sharksArray[0])}
              max={sharksArray[1]}
            ></progress>
          </p>

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
                        response == optionA.toUpperCase() ? "btn rounded-lg btn-accent" : "btn rounded-lg btn-secondary"
                      }
                    >
                      {optionA}
                    </button>
                  </div>
                  <div className="divider lg:divider-horizontal">OR</div>
                  <div className="grid flex-grow items-center">
                    <button
                      onClick={e => selectOption(e)}
                      className={
                        response == optionB.toUpperCase() ? "btn rounded-lg btn-accent" : "btn rounded-lg btn-secondary"
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
              {isError ? (
                <div className="alert alert-error mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold">Oops</h3>
                    <div className="text-xs">{errorMsg}</div>
                  </div>
                  <button onClick={() => setIsError(!isError)} className="btn btn-sm">
                    Close
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <button
              onClick={() => setIsSelected(!isSelected)}
              className="btn btn-secondary btn-md normal-case font-thick bg-base-200 mt-3"
            >
              Join Quest
            </button>
          )}
        </div>

        {/* Show modal popup if response is submitted */}
        {isSubmitted ? (
          <>
            {/* Check checkbox if modal should be open */}
            {isSubmitted ? <input type="checkbox" id="my-modal" class="modal-toggle" checked /> : null}

            <dialog id="my-modal" className="modal">
              <div className="modal-box bg-primary float-left">
                <progress className="progress progress-primary w-100 mb-6"></progress>
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
    </>
  );
};
