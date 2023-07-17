import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Fantom = {
  index: 7,
  id: CHAINS_IDS.FANTOM,
  name: 'Fantom',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/fantom/info/logo.png',
  coinId: 10000250,
  symbol: 'FTM',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '250',
  explorer: {
    url: 'https://ftmscan.com',
    explorerName: 'Fantom Blockchain Explorer',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://fantom.foundation',
    rpc: 'https://rpc.ftm.tools',
  },
};
