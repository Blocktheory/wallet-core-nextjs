import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Crescent = {
  index: 31,
  id: CHAINS_IDS.CRESCENT,
  name: 'Crescent',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/crescent/info/logo.png',
  coinId: 60000118,
  symbol: 'CRE',
  decimals: 6,
  chainId: 'crescent-1',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'cre',
  denom: 'ucre',
  explorer: {
    url: 'https://www.mintscan.io/crescent',
    txPath: '/txs/',
    accountPath: '/account/',
    explorerName: 'Crescent Explorer',
  },
  info: {
    url: 'https://crescent.network/',
    rpc: 'https://mainnet.crescent.network:26657',
  },
};
