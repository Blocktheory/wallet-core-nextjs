import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Sommelier = {
  index: 31,
  id: CHAINS_IDS.SOMMELIER,
  name: 'Sommelier',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/sommelier/info/logo.png',
  coinId: 11000118,
  symbol: 'SOMM',
  decimals: 6,
  chainId: 'sommelier-3',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'somm',
  denom: 'usomm',
  explorer: {
    url: 'https://www.mintscan.io/sommelier',
    txPath: '/txs/',
    accountPath: '/account/',
    explorerName: 'Sommelier Explorer',
  },
  info: {
    url: 'https://www.sommelier.finance/',
    rpc: 'https://sommelier-rpc.polkachu.com/',
  },
};
