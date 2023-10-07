import Sharknado from "../public/Sharknado.json";
import { useContractWrite } from "wagmi";
import scaffoldConfig from "~~/scaffold.config";

export const useSharknadoContractWrite = (functionName: string) => {
  const contract = useContractWrite({
    abi: Sharknado.abi,
    address: scaffoldConfig.sharknadoAddress,
    functionName,
  });

  return contract;
};

export const useSharknadoTokenContractWrite = (functionName: string) => {
  const contract = useContractWrite({
    abi: Sharknado.abi,
    address: scaffoldConfig.sharknadoTokenAddress,
    functionName,
  });

  return contract;
};
