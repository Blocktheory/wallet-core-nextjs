import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Moonbeam = {
  index: 17,
  id: CHAINS_IDS.MOONBEAM,
  name: 'Moonbeam',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/moonbeam/info/logo.png',
  coinId: 10001284,
  symbol: 'GLMR',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '1284',
  explorer: {
    explorerName: 'Moonbeam Explorer',
    url: 'https://moonscan.io',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://moonbeam.network',
    rpc: 'https://rpc.api.moonbeam.network',
  },
};
