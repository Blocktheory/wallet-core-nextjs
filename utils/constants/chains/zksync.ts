import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const ZkSync = {
  index: 8,
  id: CHAINS_IDS.ZKSYNC,
  name: 'zkSync Era',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/zksync/info/logo.png',
  coinId: 10000324,
  symbol: 'ETH',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '324',
  explorer: {
    url: 'https://explorer.zksync.io/',
    explorerName: 'zkSync Era Mainnet Explorer',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://zksync.io/',
    rpc: 'https://mainnet.era.zksync.io',
  },
};
