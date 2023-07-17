import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const XDC = {
  index: 33,
  id: CHAINS_IDS.XDC,
  name: 'XDC Network',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/xdc/info/logo.png',
  coinId: 50,
  symbol: 'XDC',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/550'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '50',
  hrp: 'xdc',
  explorer: {
    url: 'https://explorer.xinfin.network',
    explorerName: 'Xinfin Explorer',
    txPath: '/txs/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://xinfin.org',
  },
};
