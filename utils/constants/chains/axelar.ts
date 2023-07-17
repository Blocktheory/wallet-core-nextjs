import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Axelar = {
  index: 31,
  id: CHAINS_IDS.AXELAR,
  name: 'Axelar',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/axelar/info/logo.png',
  coinId: 50000118,
  symbol: 'AXL',
  decimals: 6,
  chainId: 'axelar-dojo-1',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'axelar',
  denom: 'uaxl',
  explorer: {
    url: 'https://www.mintscan.io/axelar',
    txPath: '/txs/',
    accountPath: '/account/',
    explorerName: 'Axelar Explorer',
  },
  info: {
    url: 'https://axelar.network/',
    rpc: 'https://axelar-rpc.quickapi.com/',
  },
};
