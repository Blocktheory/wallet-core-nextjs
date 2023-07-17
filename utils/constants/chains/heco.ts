import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Heco = {
  index: 14,
  id: CHAINS_IDS.HECO,
  name: 'ECO Chain',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/heco/info/logo.svg',
  coinId: 10000553,
  symbol: 'HT',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '128',
  explorer: {
    explorerName: 'Heco chain explorer',
    url: 'https://hecoinfo.com',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://www.hecochain.com/en-us',
    rpc: 'https://http-mainnet.hecochain.com/',
  },
};
