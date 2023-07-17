import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Band = {
  index: 30,
  id: CHAINS_IDS.BAND,
  name: 'Band Protocol',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/band/info/logo.png',
  symbol: 'BAND',
  coinId: 494,
  decimals: 6,
  chainId: 'laozi-mainnet',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/494'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'band',
  denom: 'uband',
  explorer: {
    url: 'https://cosmoscan.io',
    explorerName: 'Cosmoscan',
    txPath: '/tx/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://bandprotocol.com/',
    rpc: 'https://api-wt2-lb.bandchain.org',
  },
};
