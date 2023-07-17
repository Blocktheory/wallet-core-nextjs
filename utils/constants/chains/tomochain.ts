import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Tomochain = {
  index: 36,
  id: CHAINS_IDS.TOMOCHAIN,
  name: 'TomoChain',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/tomochain/info/logo.png',
  coinId: 889,
  symbol: 'TOMO',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/889'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '88',
  explorer: {
    url: 'https://tomoscan.io',
    explorerName: 'Tomoscan',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://tomochain.com',
    rpc: 'https://rpc.tomochain.com',
  },
};
