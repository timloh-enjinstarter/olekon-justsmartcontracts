import { mainnet, sepolia, Chain as WagmiChain } from "wagmi";
import {
  arbitrum,
  goerli,
  bsc,
  optimism,
  polygon,
  zkSync,
  avalanche,
  polygonMumbai,
  cronos,
  kava,
  manta,
  base,
  gnosis,
  celo,
  mantle,
  fantom,
  moonbeam,
  linea,
  metis,
  astar,
  canto,
  aurora,
  telos,
  okc,
  moonriver,
  boba,
  arbitrumSepolia,
  bscTestnet,
  coreDao,
} from "viem/chains";

import { Chain } from "./chains";
import { coreDaoTestnet } from "./chaiin-definitions/coreDaoTestnet";

const ChainWagmiMap: Record<Chain, WagmiChain> = {
  [Chain.ARBITRUM]: arbitrum,
  [Chain.BSC]: bsc,
  [Chain.OPTIMISM]: optimism,
  [Chain.POLYGON]: polygon,
  [Chain.ZKSYNC]: zkSync,
  [Chain.AVALANCHE]: avalanche,
  [Chain.ETHEREUM]: mainnet,
  [Chain.ETH_GOERLI]: goerli,
  [Chain.ETH_SEPOLIA]: sepolia,
  [Chain.POLYGON_MUMBAI]: polygonMumbai,
  [Chain.BASE]: base,
  [Chain.CRONOS]: cronos,
  [Chain.KAVA]: kava,
  [Chain.MANTA]: manta,
  [Chain.GNOSIS]: gnosis,
  [Chain.CELO]: celo,
  [Chain.MANTLE]: mantle,
  [Chain.FANTOM]: fantom,
  [Chain.MOONBEAM]: moonbeam,
  [Chain.LINEA]: linea,
  [Chain.METIS]: metis,
  [Chain.ASTAR]: astar,
  [Chain.CANTO]: canto,
  [Chain.AURORA]: aurora,
  [Chain.TELOS]: telos,
  [Chain.OKXCHAIN]: okc,
  [Chain.MOONRIVER]: moonriver,
  [Chain.BOBA]: boba,
  [Chain.ARBITRUM_SEPOLIA]: arbitrumSepolia,
  [Chain.BSC_TESTNET]: bscTestnet,
  [Chain.COREDAO]: coreDao,
  [Chain.COREDAO_TESTNET]: coreDaoTestnet,
};

export const toWagmiChain = (chain: Chain) => ChainWagmiMap[chain];
