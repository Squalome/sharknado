import Sharknado from "../public/Sharknado.json";
import { useContractRead } from "wagmi";
import scaffoldConfig from "~~/scaffold.config";

export const useSharknadoContract = (functionName: string) => {
  const contract = useContractRead({
    abi: Sharknado.abi,
    address: scaffoldConfig.sharknadoAddress,
    functionName,
  });

  return contract;
};

export const useSharknadoTokenContract = (functionName: string) => {
  const contract = useContractRead({
    abi: Sharknado.abi,
    address: scaffoldConfig.sharknadoTokenAddress,
    functionName,
  });

  return contract;
};
