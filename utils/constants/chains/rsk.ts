import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Rsk = {
  index: 8,
  id: CHAINS_IDS.RSK,
  name: 'Rootstock',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/rsk/info/logo.png',
  coinId: 137,
  symbol: 'RBTC',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/137'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '30',
  explorer: {
    url: 'https://explorer.rsk.co',
    explorerName: 'RSK Explorer',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://rootstock.io/',
    rpc: 'https://public-node.rsk.co',
  },
};
