import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Gnosis = {
  index: 13,
  id: CHAINS_IDS.GNOSIS,
  name: 'Gnosis',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/xdai/info/logo.png',
  coinId: 10000100,
  symbol: 'xDAI',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
      basePath: "m/44'/60'/${index}'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '100',
  explorer: {
    explorerName: 'Gnosis Chain Explorer',
    url: 'https://gnosisscan.io',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://www.xdaichain.com',
    rpc: 'https://rpc.gnosischain.com',
  },
};
