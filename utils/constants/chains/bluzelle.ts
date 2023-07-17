import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Bluzelle = {
  index: 35,
  id: CHAINS_IDS.BLUZELLE,
  name: 'Bluzelle',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bluzelle/info/logo.png',
  coinId: 483,
  symbol: 'BLZ',
  decimals: 6,
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/483'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  chainId: 'bluzelle-9',
  hrp: 'bluzelle',
  denom: 'ubnt',
  explorer: {
    url: 'https://bd.explorer.net.bluzelle.com',
    explorerName: 'BluzelleNet',
    txPath: '/transactions/',
    accountPath: '/accounts/',
  },
  info: {
    url: 'https://bluzelle.com',
    rpc: 'https://bluzelle.github.io/api/',
  },
  prefix: 'bluzelle',
};
