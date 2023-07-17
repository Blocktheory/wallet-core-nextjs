import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Avalance = {
  index: 4,
  id: CHAINS_IDS.AVALANCHEC,
  name: 'Avalanche C-Chain',
  alias: 'Avax',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png',
  coinId: 10009000,
  symbol: 'AVAX',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '43114',
  explorer: {
    url: 'https://snowtrace.io',
    explorerName: 'AvalancheExplorer',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://www.avalabs.org/',
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
  },
};
