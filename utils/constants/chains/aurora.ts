import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Aurora = {
  index: 10,
  id: CHAINS_IDS.AURORA,
  name: 'Aurora',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/aurora/info/logo.png',
  coinId: 1323161554,
  symbol: 'ETH',
  chainId: '1313161554',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  explorer: {
    url: 'https://aurorascan.dev',
    explorerName: "'Aurora Explorer'",
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://aurora.dev/',
    rpc: 'https://mainnet.aurora.dev',
  },
};
