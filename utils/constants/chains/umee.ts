import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Umee = {
  index: 31,
  id: CHAINS_IDS.UMEE,
  name: 'Umee',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/umee/info/logo.png',
  symbol: 'UMEE',
  coinId: 14000118,
  decimals: 6,
  chainId: 'umee-1',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'umee',
  denom: 'uumee',
  explorer: {
    url: 'https://www.mintscan.io/umee',
    explorerName: 'Mintscan',
    txPath: '/txs/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://umee.cc/',
    rpc: 'https://umee-rpc.polkachu.com/',
  },
};
