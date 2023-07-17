import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Akash = {
  index: 31,
  id: CHAINS_IDS.AKASH,
  name: 'Akash',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/akash/info/logo.png',
  coinId: 10000121,
  symbol: 'AKT',
  decimals: 6,
  chainId: 'akashnet-2',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'akash',
  denom: 'uakt',
  explorer: {
    url: 'https://www.mintscan.io/akash',
    txPath: '/txs/',
    accountPath: '/account/',
    explorerName: 'Akash Explorer',
  },
  info: {
    url: 'https://akash.network/',
    rpc: 'https://akash.c29r3.xyz/rpc',
  },
};
