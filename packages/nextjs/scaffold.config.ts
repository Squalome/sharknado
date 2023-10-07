import * as chains from "wagmi/chains";

export type ScaffoldConfig = {
  sharknadoAddress: string;
  sharknadoTokenAddress: string;
  targetNetwork: chains.Chain;
  pollingInterval: number;
  alchemyApiKey: string;
  infuraApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
  walletAutoConnect: boolean;
};

const scaffoldConfig = {
  sharknadoAddress: "0x10d7526150f4134d9B6631c8C4A6d812a91dFfA7",
  sharknadoTokenAddress: "0xf649cb1884dcf8bac5ccfa669083c489288685bb",

  // The network where your DApp lives in
  targetNetwork: chains.gnosis,

  // The interval at which your front-end polls the RPC servers for new data
  // it has no effect on the local network
  pollingInterval: 30000,

  // This is ours Alchemy's default API key.
  // You can get your own at https://dashboard.alchemyapi.io
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "",
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  infuraApiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY || "",

  // This is ours WalletConnect's default project ID.
  // You can get your own at https://cloud.walletconnect.com
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  // Only show the Burner Wallet when running on hardhat network
  onlyLocalBurnerWallet: true,

  /**
   * Auto connect:
   * 1. If the user was connected into a wallet before, on page reload reconnect automatically
   * 2. If user is not connected to any wallet:  On reload, connect to burner wallet if burnerWallet.enabled is true && burnerWallet.onlyLocal is false
   */
  walletAutoConnect: true,
} satisfies ScaffoldConfig;

export default scaffoldConfig;
