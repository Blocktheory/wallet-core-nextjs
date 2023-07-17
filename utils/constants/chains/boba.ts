import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Boba = {
  index: 20,
  id: CHAINS_IDS.BOBA,
  name: 'Boba',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/boba/info/logo.png',
  coinId: 10000288,
  symbol: 'ETH',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
      basePath: "m/44'/60'/${index}'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '288',
  explorer: {
    url: 'https://blockexplorer.boba.network',
    explorerName: 'Boba Explorer',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://boba.network/',
    rpc: 'https://mainnet.boba.network',
  },
};
