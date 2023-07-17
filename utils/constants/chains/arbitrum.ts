import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Arbitrum = {
  index: 9,
  id: CHAINS_IDS.ARBITRUM,
  name: 'Arbitrum',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png',
  coinId: 10042221,
  symbol: 'ETH',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '42161',
  explorer: {
    url: 'https://arbiscan.io',
    explorerName: 'Arbiscan',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://arbitrum.io',
    rpc: 'https://arb1.arbitrum.io/rpc',
  },
};
