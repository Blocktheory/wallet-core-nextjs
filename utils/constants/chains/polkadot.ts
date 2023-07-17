import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Polkadot = {
  index: 38,
  id: CHAINS_IDS.POLKADOT,
  name: 'Polkadot',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polkadot/info/logo.png',
  coinId: 354,
  symbol: 'DOT',
  decimals: 10,
  blockchain: CHAINS_ENUMS.POLKADOT,
  derivation: [
    {
      path: "m/44'/354'/0'/0'/0'",
    },
  ],
  curve: 'ed25519',
  publicKeyType: 'ed25519',
  chainId: '354',
  explorer: {
    explorerName: 'Subscan',
    url: 'https://polkadot.subscan.io',
    txPath: '/extrinsic/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://polkadot.network/',
    rpc: 'wss://rpc.polkadot.io',
  },
};
