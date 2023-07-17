import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Tezos = {
  index: 7,
  id: CHAINS_IDS.TEZOS,
  name: 'Tezos',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/tezos/info/logo.png',
  coinId: 1729,
  symbol: 'XTZ',
  decimals: 6,
  chainId: 'NetXdQprcVkpaWU',
  blockchain: CHAINS_ENUMS.TEZOS,
  derivation: [
    {
      path: "m/44'/1729'/0'/0'",
    },
  ],
  curve: 'ed25519',
  publicKeyType: 'ed25519',
  explorer: {
    explorerName: 'Tezos blockchain explorer',
    url: 'https://tzstats.com',
    txPath: '/',
    accountPath: '/',
  },
  info: {
    url: 'https://tezos.com',
    rpc: 'https://mainnet-node.madfish.solutions',
  },
};
