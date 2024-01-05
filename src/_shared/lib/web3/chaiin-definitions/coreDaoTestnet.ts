import { defineChain } from 'viem'

export const coreDaoTestnet = /*#__PURE__*/ defineChain({
  id: 1115,
  name: 'Core Dao Testnet',
  network: 'coreDao-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Core',
    symbol: 'tCORE',
  },
  rpcUrls: {
    public: { http: ['https://rpc.test.btcs.network'] },
    default: { http: ['https://rpc.test.btcs.network'] },
  },
  blockExplorers: {
    default: { name: 'CoreScan', url: 'https://scan.test.btcs.network' },
    etherscan: { name: 'CoreScan', url: 'https://scan.test.btcs.network' },
  },
  testnet: true,
})