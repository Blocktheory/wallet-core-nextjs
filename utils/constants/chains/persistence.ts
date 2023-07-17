import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Persistence = {
  index: 31,
  id: CHAINS_IDS.PERSISTENCE,
  name: 'Persistence',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/persistence/info/logo.png',
  coinId: 52,
  symbol: 'XPRT',
  decimals: 6,
  chainId: 'core-1',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'persistence',
  denom: 'uxprt',
  explorer: {
    url: 'https://www.mintscan.io/persistence',
    txPath: '/txs/',
    accountPath: '/account/',
    explorerName: 'Persistence Explorer',
  },
  info: {
    url: 'https://persistence.one/',
    rpc: 'https://rpc.core.persistence.one',
  },
};
