import { Chain } from "./chains";
import { toWagmiChain } from "./wagmi";

type TChainConfig = {
  name: string;
  explorer: string;
  testnet?: boolean;
};

export const getChainConfig = (chain: Chain): TChainConfig => {
  const wagmiChain = toWagmiChain(chain);
  return {
    name: wagmiChain.name,
    explorer: wagmiChain.blockExplorers?.default.url || "",
    testnet: wagmiChain.testnet || false,
  };
};

export const getTxUrl = (chain: Chain, txHash: string) => {
  const explorer = getChainConfig(chain).explorer;

  return explorer ? `${explorer}/tx/${txHash}` : "";
};

export const getAddressUrl = (chain: Chain, address: string) => {
  const explorer = getChainConfig(chain).explorer;

  return explorer ? `${explorer}/address/${address}` : "";
};
