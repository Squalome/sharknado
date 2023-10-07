// import Feedback from "../../../contract-artifacts/Feedback.json";
// import { Contract, Wallet, providers } from "ethers";
// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (typeof process.env.SHARKNADO_CONTRACT_ADDRESS !== "string") {
//     throw new Error("Please, define SHARKNADO_CONTRACT_ADDRESS in your .env file");
//   }

//   if (typeof process.env.DEFAULT_NETWORK !== "string") {
//     throw new Error("Please, define DEFAULT_NETWORK in your .env file");
//   }

//   if (typeof process.env.INFURA_API_KEY !== "string") {
//     throw new Error("Please, define INFURA_API_KEY in your .env file");
//   }

//   if (typeof process.env.PRIVATE_KEY !== "string") {
//     throw new Error("Please, define PRIVATE_KEY in your .env file");
//   }

//   const ethereumPrivateKey = process.env.PRIVATE_KEY;
//   const ethereumNetwork = process.env.DEFAULT_NETWORK;
//   const infuraApiKey = process.env.INFURA_API_KEY;
//   const contractAddress = process.env.SHARKNADO_CONTRACT_ADDRESS;

//   const provider =
//     ethereumNetwork === "localhost"
//       ? new providers.JsonRpcProvider("http://127.0.0.1:8545")
//       : ethereumNetwork.startsWith("gnosis")
//       ? new providers.JsonRpcProvider("https://gnosis.drpc.org")
//       : new providers.InfuraProvider(ethereumNetwork, infuraApiKey);

//   const signer = new Wallet(ethereumPrivateKey, provider);
//   const contract = new Contract(contractAddress, Feedback.abi, signer);

//   const { identityCommitment, questionId, groupId } = req.body;

//   if (!identityCommitment || !questionId || !groupId) {
//     res.status(500).end();
//     return;
//   }

//   try {
//     const transaction = await contract.joinGroup(questionId, groupId, identityCommitment);

//     await transaction.wait();

//     res.status(200).end();
//   } catch (error: any) {
//     console.error(error);

//     res.status(500).end();
//   }
// }
