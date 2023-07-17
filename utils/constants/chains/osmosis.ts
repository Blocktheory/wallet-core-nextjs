import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Osmosis = {
  index: 27,
  id: CHAINS_IDS.OSMOSIS,
  name: 'Osmosis',
  coinId: 10000118,
  symbol: 'OSMO',
  decimals: 6,
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/osmosis/info/logo.svg',
  chainId: 'osmosis-1',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'osmo',
  denom: 'uosmo',
  explorer: {
    url: 'https://mintscan.io/osmosis',
    explorerName: 'Mint Scan',
    txPath: '/txs/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://osmosis.zone/',
    rpc: 'https://rpc.osmosis.zone',
  },
};
