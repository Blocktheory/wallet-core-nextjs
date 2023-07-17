import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Kava = {
  index: 28,
  id: CHAINS_IDS.KAVA,
  name: 'Kava',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/kava/info/logo.png',
  coinId: 459,
  chainId: 'kava_2222-10',
  symbol: 'KAVA',
  decimals: 6,
  blockchain: CHAINS_ENUMS.KAVA,
  derivation: [
    {
      path: "m/44'/459'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'kava',
  denom: 'ukava',
  explorer: {
    url: 'https://mintscan.io/kava',
    explorerName: 'Mintscan',
    txPath: '/txs/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://kava.io',
    rpc: 'https://kava-mainnet.chainode.tech',
  },
  prefix: 'kava',
};
