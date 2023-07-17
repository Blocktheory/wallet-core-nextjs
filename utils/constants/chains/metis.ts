import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Metis = {
  index: 18,
  id: CHAINS_IDS.METIS,
  name: 'Metis',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/metis/info/logo.png',
  coinId: 10001088,
  symbol: 'METIS',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '1088',
  explorer: {
    url: 'https://andromeda-explorer.metis.io',
    explorerName: 'Metis Explorer',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://www.metis.io/',
    rpc: 'https://andromeda.metis.io/?owner=1088',
  },
};
