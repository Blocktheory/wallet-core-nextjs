import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Kujira = {
  index: 31,
  id: CHAINS_IDS.KUJIRA,
  name: 'Kujira',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/kujira/info/logo.png',
  symbol: 'KUJI',
  coinId: 10000132,
  decimals: 6,
  chainId: 'kaiyo-1',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'kujira',
  denom: 'ukuji',
  explorer: {
    url: 'https://www.mintscan.io/kujira',
    explorerName: 'Mintscan',
    txPath: '/txs/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://kujira.app/',
    rpc: 'https://kujira-rpc.polkachu.com/',
  },
};
