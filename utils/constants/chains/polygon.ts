import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Polygon = {
  index: 3,
  id: CHAINS_IDS.POLYGON,
  name: 'Polygon',
  alias: 'Matic',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png',
  coinId: 966,
  symbol: 'MATIC',
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
  chainId: '137',
  explorer: {
    url: 'https://polygonscan.com',
    explorerName: 'Polygonscan',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://polygon.technology',
    rpc: `https://polygon.llamarpc.com`,
  },
};
