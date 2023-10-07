import Sharknado from "../public/Sharknado.json";
import { useContractWrite } from "wagmi";

export const useContractWithSigner = (functionName: string) => {
  const contract = useContractWrite({
    abi: Sharknado.abi,
    address: "0x63b9F0DFa2a6a3604Fb301b376Dc3a5b133EDd3a",
    functionName,
  });

  return contract;
};
