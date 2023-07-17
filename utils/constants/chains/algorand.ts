import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Algorand = {
  index: 31,
  id: CHAINS_IDS.ALGORAND,
  name: 'Algorand',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/algorand/info/logo.png',
  coinId: 283,
  symbol: 'ALGO',
  decimals: 6,
  blockchain: CHAINS_ENUMS.ALGORAND,
  derivation: [
    {
      path: "m/44'/283'/0'/0'/0'",
    },
  ],
  curve: 'ed25519',
  publicKeyType: 'ed25519',
  chainId: '283',
  explorer: {
    url: 'https://algoexplorer.io',
    explorerName: 'Algo Explorer',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://www.algorand.com/',
    rpc: 'https://node.algoexplorerapi.io/v2',
  },
};
