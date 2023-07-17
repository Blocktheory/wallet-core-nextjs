import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Celo = {
  index: 15,
  id: CHAINS_IDS.CELO,
  name: 'Celo',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/celo/info/logo.png',
  coinId: 52752,
  symbol: 'CELO',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '42220',
  explorer: {
    explorerName: 'Celo explorer',
    url: 'https://explorer.celo.org',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://celo.org',
    rpc: 'https://forno.celo.org',
  },
};
