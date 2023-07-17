import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Stargaze = {
  index: 24,
  id: CHAINS_IDS.STARGAZE,
  name: 'Stargaze',
  coinId: 20000118,
  symbol: 'STARS',
  decimals: 6,
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/stargaze/info/logo.png',
  chainId: 'stargaze-1',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'stars',
  denom: 'ustars',
  explorer: {
    url: 'https://mintscan.io/stargaze',
    explorerName: 'Mint Scan',
    txPath: '/txs/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://www.stargaze.zone/',
    rpc: 'https://rpc.stargaze-apis.com',
  },
};
