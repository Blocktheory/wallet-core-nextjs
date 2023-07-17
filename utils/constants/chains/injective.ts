import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Injective = {
  index: 31,
  id: CHAINS_IDS.INJECTIVE,
  name: 'Injective',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/injective/info/logo.png',
  symbol: 'INJ',
  coinId: 10000060,
  decimals: 18,
  chainId: 'injective-1',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'inj',
  denom: 'inj',
  explorer: {
    url: 'https://www.mintscan.io/injective',
    explorerName: 'Mintscan',
    txPath: '/txs/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://injective.com/',
    rpc: 'https://k8s.global.mainnet.tm.injective.network/',
  },
};
