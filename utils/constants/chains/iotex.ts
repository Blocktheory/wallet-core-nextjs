import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Iotex = {
  index: 19,
  id: CHAINS_IDS.IOTEX,
  name: 'IoTeX',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/iotex/info/logo.svg',
  coinId: 304,
  symbol: 'IOTX',
  decimals: 18,
  blockchain: CHAINS_ENUMS.IOTEX,
  derivation: [
    {
      path: "m/44'/304'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '4689',
  hrp: 'io',
  explorer: {
    explorerName: 'iotexscan.io',
    url: 'https://iotexscan.io',
    txPath: '/action/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://iotex.io',
    rpc: 'https://babel-api.mainnet.iotex.one',
  },
};
