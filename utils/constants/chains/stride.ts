import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Stride = {
  index: 24,
  id: CHAINS_IDS.STRIDE,
  name: 'Stride',
  coinId: 40000118,
  symbol: 'STRD',
  decimals: 6,
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/stride/info/logo.png',
  chainId: 'stride-1',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'stride',
  denom: 'ustrd',
  explorer: {
    url: 'https://mintscan.io/stride',
    explorerName: 'Mint Scan',
    txPath: '/txs/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://stride.zone/',
    rpc: 'https://stride-rpc.polkachu.com/',
  },
};
